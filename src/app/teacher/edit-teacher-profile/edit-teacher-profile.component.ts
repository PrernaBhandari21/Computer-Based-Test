import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teacher-profile',
  templateUrl: './edit-teacher-profile.component.html',
  styleUrls: ['./edit-teacher-profile.component.css']
})
export class EditTeacherProfileComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      this.user = JSON.parse(storedUserString);
    }
  }

  onSubmit() {
    console.log("USER DETAILS ARE : ", this.user);
    const updatedData =this.user; 

    


    //update in database !
    fetch('/auth', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
    .then(response => {
      console.log('Response from server:', response);
      if (response.ok) {
        // Successful operation

        //update in localStorage 
         localStorage.setItem('user', JSON.stringify(updatedData));
        alert("Data updated successfully!!");
      } else {
        // Handle error case
        console.error('Error in updating data. Status:', response.status);
        alert('Error in updating data. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error in updating data:', error);
      alert('Error in updating data. Please try again.');
    });
  }
}
