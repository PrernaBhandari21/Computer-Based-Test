import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHA512 } from 'crypto-js';


@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditTeacherComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {

    
    this.editForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.required],
      email: [{ value: this.data?.email || '', disabled: true }, Validators.required],
      phoneNo: [{ value: this.data?.phoneNo || '', disabled: true }, Validators.required],
      password: [{ value: this.data?.password || '', disabled: true }, Validators.required],
      role: ["teacher"],

    });

    // Check if phoneNo has a value and enable/disable the control accordingly
    if (this.editForm.get('phoneNo')?.value) {
      console.log("yes");
      this.editForm.get('phoneNo')?.disable();
    } else {
      console.log("no");
      this.editForm.get('phoneNo')?.enable();
    }

        // Check if email/userId has a value and enable/disable the control accordingly
        if (this.editForm.get('email')?.value) {
          this.editForm.get('email')?.disable();
        } else {
          console.log("no");
          this.editForm.get('email')?.enable();
        }

              // Check if password has a value and enable/disable the control accordingly
              if (this.editForm.get('password')?.value) {
                this.editForm.get('password')?.disable();
              } else {
                console.log("no");
                this.editForm.get('password')?.enable();
              }
      


  }

  // Function to save the form data and close the dialog
  save() {
    if (this.editForm.valid) {
   

      if(this.editForm.value?.password){
        const password = this.editForm.value.password;
        const hashedPassword = SHA512(password).toString();
        this.editForm.value.password = hashedPassword

      }

      const { name, email, phoneNo , password, role} = this.editForm.value;
      const postData = { name, email,password, phoneNo, role};
      console.log(postData);
  


      fetch('/auth',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(postData)
      }).then(response =>{
        console.log("response from server",response);
        if(response.ok){
          alert("Successfully created teacher!")
        }else{
          console.error('Error in creation of teacher. Status:', response.status);
          alert('Error in creating teacher. Please try again.');
        }
      }).catch(error => {
        console.error('Error in creation of teacher. Error : ', error);
        alert('Error in creating teacher. Please try again.');
      });

    }
  }

  // Function to close the dialog without saving
  cancel() {
    this.dialogRef.close();
  }


}
