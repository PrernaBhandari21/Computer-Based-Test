import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      teacherName: [this.data?.TeacherName || '', Validators.required],
      phoneNo: [{ value: this.data?.phoneNo || '', disabled: true }, Validators.required],
      userId: [{ value: this.data?.userId || '', disabled: true }, Validators.required],
      registeredDate: [{ value: this.data?.registeredDate || '', disabled: true }, Validators.required],


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
        if (this.editForm.get('userId')?.value) {
          this.editForm.get('userId')?.disable();
        } else {
          console.log("no");
          this.editForm.get('userId')?.enable();
        }


  }

  // Function to save the form data and close the dialog
  save() {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      console.log(formData);
      this.dialogRef.close(formData);
    }
  }

  // Function to close the dialog without saving
  cancel() {
    this.dialogRef.close();
  }


}
