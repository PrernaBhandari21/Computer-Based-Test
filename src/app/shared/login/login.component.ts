import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';


interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showSideMenu: boolean | undefined;
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http : HttpClient,
    private activatedRoute: ActivatedRoute,
    private route : Router) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;
  }

  roles: Role[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'teacher', viewValue: 'Teacher / Admin'},

  ];


  async onSubmit(): Promise<void> {
    if (this.registrationForm.valid) {

      if(this.registrationForm.value?.password){
        const password = this.registrationForm.value.password;
        const hashedPassword = SHA512(password).toString();
        this.registrationForm.value.password = hashedPassword
      }

      console.log(this.registrationForm.value);

      const email = this.registrationForm.value.email;
      const password = this.registrationForm.value.password;
      const role =await this.registrationForm.value.role;

      console.log("email : ",email);
      console.log("password : ",password);
      console.log("role",role);

     

      if(role == "student"){
        
        const url = `/studentLogin?email=${email}&password=${password}`;
        this.http.get(url).subscribe(
          (response: any) => {
            console.log('Server response:', response);
        
            if (response && response.user) {
              console.log('User Info:', response.user);
  
        localStorage.setItem('user', JSON.stringify(response.user));
        
  
        const storedUserString = localStorage.getItem('user');
        if (storedUserString) {
          const storedUser = JSON.parse(storedUserString);
          console.log('Stored User Info:', storedUser);
  
  
  
          if(response.user.role == "admin"){
            this.route.navigate([""])
            console.log("redirect to dashboard");
          }else if(response.user.role == "teacher"){
            this.route.navigate(["edit-teacher-profile"])
          }else if(response.user.role == "student"){
            this.route.navigate(["student-dashboard"])
          }
  
        } else {
          console.log('User information not found in localStorageeeeeeeeee');
        }
        
  
            } else {
              if (response && response.message === 'Incorrect email') {
                console.log('Incorrect email');
                alert('Incorrect email');
              } else if (response && response.message === 'Incorrect password') {
                console.log('Incorrect password');
                alert('Incorrect password');
              } else {
                console.log('User not found or error occurred');
                alert('User not found or an error occurred');
              }
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }else{

      
      const url = `/auth?email=${email}&password=${password}`;
      this.http.get(url).subscribe(
        (response: any) => {
          console.log('Server response:', response);
      
          if (response && response.user) {
            console.log('User Info:', response.user);

      localStorage.setItem('user', JSON.stringify(response.user));
      

      const storedUserString = localStorage.getItem('user');
      if (storedUserString) {
        const storedUser = JSON.parse(storedUserString);
        console.log('Stored User Info:', storedUser);



        if(response.user.role == "admin"){
          this.route.navigate([""])
          console.log("redirect to dashboard");
        }else if(response.user.role == "teacher"){
          this.route.navigate(["edit-teacher-profile"])
        }else if(response.user.role == "approver"){
          this.route.navigate(["approver-dashboard"])
        }

      } else {
        console.log('User information not found in localStorageeeeeeeeee');
      }
      

          } else {
            if (response && response.message === 'Incorrect email') {
              console.log('Incorrect email');
              alert('Incorrect email');
            } else if (response && response.message === 'Incorrect password') {
              console.log('Incorrect password');
              alert('Incorrect password');
            } else {
              console.log('User not found or error occurred');
              alert('User not found or an error occurred');
            }
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );

    }
      


      
    }
  }




}
