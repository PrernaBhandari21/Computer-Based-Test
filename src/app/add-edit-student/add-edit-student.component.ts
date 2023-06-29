import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHA512 } from 'crypto-js';


@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  editForm!: FormGroup;
  groupTypes: string[] = ['School', 'Corporate', 'Individual'];
  subGroupTypes: string[] = ['Phase1', 'Phase2', 'Phase3','Vibgyor'];



  constructor(
    public dialogRef: MatDialogRef<AddEditStudentComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("Data : ", this.data);
  

    this.editForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.required],

      email: [{ value: this.data?.email || '', disabled: true }, Validators.required],

      phoneNo: [{ value: this.data?.phoneNo || '', disabled: true }, Validators.required],

      password:[{ value: this.data?.password || '', disabled: true }, Validators.required],

      registrationNo: [{ value: this.data?.registrationNo || 0, disabled: true }, Validators.required],

      group: [{ value: this.data?.group || '', disabled: true }, Validators.required],
      
      subGroup: [{ value: this.data?.subGroup || '', disabled: true }, Validators.required],

      role:["student"]


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

       // Check if group has a value and enable/disable the control accordingly
    if (this.editForm.get('group')?.value) {
      console.log(this.editForm.get('group')?.value);
      this.editForm.get('group')?.disable();
    } else {
      this.editForm.get('group')?.enable();
    }


        // Check if registrationNo has a value and enable/disable the control accordingly
        if (this.editForm.get('registrationNo')?.value) {
          console.log("yes");
          this.editForm.get('registrationNo')?.disable();
        } else {
          console.log("no");
          this.editForm.get('registrationNo')?.enable();
        }

        

            // Check if password has a value and enable/disable the control accordingly
    if (this.editForm.get('password')?.value) {
      console.log("yes");
      this.editForm.get('password')?.disable();
    } else {
      console.log("no");
      this.editForm.get('password')?.enable();
    }


// Set the initial value of the group form control after the form is initialized
if (this.data?.group) {
  this.editForm.get('group')?.setValue(this.data.group);
}


       // Check if subgroup has a value and enable/disable the control accordingly
       if (this.editForm.get('subGroup')?.value) {
        this.editForm.get('subGroup')?.disable();
      } else {
        this.editForm.get('subGroup')?.enable();
      }

      // Set the initial value of the group form control after the form is initialized
if (this.data?.subGroup) {
  this.editForm.get('subGroup')?.setValue(this.data.subGroup);
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

      const formData = this.editForm.value;

      const { name, email, phoneNo , password, registrationNo , group, subGroup, role} = this.editForm.value;
      const postData = { name, email,password, registrationNo, group, subGroup, phoneNo, role};
      console.log(postData);
  
  
      fetch('/studentAuth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => {
          console.log('Response from server:', response);
          if (response.ok) {
            // Successful operation
            alert("Student Created Successfully !!");
          } else {
            // Handle error case
            console.error('Error in creation of student. Status:', response.status);
            alert('Error in creating student. Please try again.');
          }
        })
        .catch(error => {
          console.error('EError in creation of student. Error : ', error);
          alert('Error in creating student. Please try again.');
        });

      // this.dialogRef.close(formData);
    }
  }

  // Function to close the dialog without saving
  cancel() {
    this.dialogRef.close();
  }

}
