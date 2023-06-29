import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';

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
    });
  }

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;
  }


  onSubmit(): void {
    this.route.navigate([""]);
    if (this.registrationForm.valid) {

      if(this.registrationForm.value?.password){
        const password = this.registrationForm.value.password;
        const hashedPassword = SHA512(password).toString();
        this.registrationForm.value.password = hashedPassword

      }

      console.log(this.registrationForm.value);

      const email = this.registrationForm.value.email;
      const password = this.registrationForm.value.password

      console.log("email : ",email);
      console.log("password : ",password);

     


      const url = `/auth?email=${email}&password=${password}`;
      this.http.get(url).subscribe(
        (response: any) => {
          console.log('Server response:', response);
      
          if (response && response.user) {
            console.log('User Info:', response.user);

      localStorage.setItem('user', JSON.stringify(response.user));
      if(response.user.role == "admin"){
        this.route.navigate([""])
        console.log("redirect to dashboard");
      }else if(response.user.role == "student"){
        this.route.navigate(["all-available-exams"])
      }else if(response.user.role == "approver"){
        this.route.navigate(["approver-dashboard"])
      }

      const storedUserString = localStorage.getItem('user');
      if (storedUserString) {
        const storedUser = JSON.parse(storedUserString);
        console.log('Stored User Info:', storedUser);
      } else {
        console.log('User information not found in localStorage');
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
