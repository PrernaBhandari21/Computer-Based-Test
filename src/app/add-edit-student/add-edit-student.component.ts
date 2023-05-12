import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      studentName: [this.data?.StudentName || '', Validators.required],
      phoneNo: [{ value: this.data?.phoneNo || '', disabled: true }, Validators.required],
      group: [{ value: this.data?.group || '', disabled: true }, Validators.required],
      userId: [{ value: this.data?.userId || '', disabled: true }, Validators.required],
      subGroup: [{ value: this.data?.subGroup || '', disabled: true }, Validators.required],
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

       // Check if group has a value and enable/disable the control accordingly
    if (this.editForm.get('group')?.value) {
      console.log(this.editForm.get('group')?.value);
      this.editForm.get('group')?.disable();
    } else {
      this.editForm.get('group')?.enable();
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
