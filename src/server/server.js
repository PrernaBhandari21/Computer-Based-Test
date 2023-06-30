const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();

const client = new Client({
    user: 'techbets',
    host: 'localhost',
    database: 'Computer_Based_Test',
    password: 'techbets',
    port: 5432, // default port for PostgreSQL
  });
  
  // Parse JSON Bodies (to handle form data)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


client.connect((err) => {
    if (err) {
      console.error('Error connecting to database', err);
    } else {
      console.log('Connected to database');
    }
  });

  client.on('end', () => {
    console.log('Disconnected from database');
  });

  //API Endpoints

  app.get('/auth', async (req, res) => {
    try {
      const { email, password } = req.query;
      const query = 'SELECT * FROM "auth" WHERE email = $1';
      const result = await client.query(query, [email]);
      const user = result.rows[0];
  
      if (user) {
        // User found, check password
        if (user.password === password) {
          res.json({ user });
          console.log("user=>", user);
        } else {
          res.status(401).json({ message: 'Incorrect password' });
          console.log('Incorrect password');
        }
      } else {
        res.status(404).json({ message: 'Incorrect email' });
        console.log('Incorrect email');
      }
    } catch (error) {
      console.error('Error retrieving user information:', error);
      res.status(500).json({ message: 'Error retrieving user information', error });
    }
  });
  
  
  app.delete('/auth',async(req,res)=>{
    try{
  // Delete all items from the "auth" table
  const query = 'DELETE FROM "auth"';
  const result = await client.query(query);
  
  console.log("All data deleted from the database");
  console.log("Result =>", result);
  
  res.json({ message: "All data deleted from the database" });
  } catch (err) {
  console.error("Error deleting data from the database:", err);
  res.status(500).json({ message: 'Error deleting data from the database', error: err });
  }
  })


  app.post('/studentAuth', async (req, res) => {
    const data = req.body;
    console.log("Data received is:", data);
  
    try {
      console.log("Inserting data into studentAuth:", data);
  
      // Insert the data into the "authDB" table
      let insertQuery;
      let insertValues;
      
      insertQuery = 'INSERT INTO "studentAuth" (name, email, "phoneNo" , password, "registrationNo" , "group", "subGroup", role) VALUES ($1, $2, $3, $4, $5,$6,$7,$8)';
      insertValues = [data.name, data.email, data.phoneNo, data.password, data.registrationNo, data.group, data.subGroup,data.role];
    
      const result = await client.query(insertQuery, insertValues);
  
      console.log("Data saved to the database:", data);
      console.log("Result =>", result);
  
      // Send back the submitted data as a response
      res.json({ message: 'Data received and saved to the database!', data: data });
    } catch (err) {
      console.log("Cannot send data:", data);
      console.error("Error saving data to the database:", err);
      if (err.code === '23505') {
        // Duplicate key error (unique constraint violation)
        res.status(409).json({ message: 'Data with the same name already exists!', data: data });
      } else {
        res.status(500).json({ message: 'Error saving data to the database', data: data, error: err });
      }
    }
  });
  

  app.get('/studentAuth', async (req, res) => {
    try {
      const query = 'SELECT name, email, "group","subGroup","phoneNo", "registrationNo", role FROM "studentAuth"';
      const result = await client.query(query);
      const students = result.rows;
  
      res.json({ students });
      console.log("students =>", students);
    } catch (error) {
      console.error('Error retrieving students:', error);
      res.status(500).json({ message: 'Error retrieving students', error });
    }
  });
  
  app.post('/auth', async (req, res) => {
    const data = req.body;
    console.log("Data received is:", data);
  
    try {
      console.log("Inserting data into studentAuth:", data);
  
      // Insert the data into the "authDB" table
      let insertQuery;
      let insertValues;
      
      insertQuery = 'INSERT INTO "auth" (name, email, "phoneNo" , password , role) VALUES ($1, $2, $3, $4, $5)';
      insertValues = [data.name, data.email, data.phoneNo, data.password, data.role];
    
      const result = await client.query(insertQuery, insertValues);
  
      console.log("Data saved to the database:", data);
      console.log("Result =>", result);
  
      // Send back the submitted data as a response
      res.json({ message: 'Data received and saved to the database!', data: data });
    } catch (err) {
      console.log("Cannot send data:", data);
      console.error("Error saving data to the database:", err);
      if (err.code === '23505') {
        // Duplicate key error (unique constraint violation)
        res.status(409).json({ message: 'Data with the same name already exists!', data: data });
      } else {
        res.status(500).json({ message: 'Error saving data to the database', data: data, error: err });
      }
    }
  });

  app.get('/auth', async (req, res) => {
    try {
      const query = `SELECT name, email, "phoneNo", role 
                     FROM "auth"
                     WHERE role = 'teacher'`;
      const result = await client.query(query);
      const teachers = result.rows;
  
      res.json({ teachers });
      console.log("teachers =>", teachers);
    } catch (error) {
      console.error('Error retrieving teachers:', error);
      res.status(500).json({ message: 'Error retrieving teachers', error });
    }
  });
  
  app.get('/studentAuth/login', async (req, res) => {
    const { email, password } = req.query;
  
    try {
      const query = 'SELECT * FROM "studentAuth" WHERE email = $1';
      const result = await client.query(query, [email]);
      const user = result.rows[0];
  
      if (user) {
        // User found, check password
        if (user.password === password) {
          res.json({ user });
          console.log("user =>", user);
        } else {
          res.status(401).json({ message: 'Incorrect password' });
          console.log('Incorrect password');
        }
      } else {
        res.status(404).json({ message: 'Incorrect email' });
        console.log('Incorrect email');
      }
    } catch (error) {
      console.error('Error retrieving user information:', error);
      res.status(500).json({ message: 'Error retrieving user information', error });
    }
  });
  
  
  const PORT = process.env.PORT || 400;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});