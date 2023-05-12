import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStudentComponent } from '../add-edit-student/add-edit-student.component';

export interface Student {
  StudentName: string;
  userId: string;
  subGroup: string;
  group: string;
  phoneNo:number,
  registeredDate:string,
  }

const ELEMENT_DATA: Student[] = [
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Tushita', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Tushita', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
  {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},

];

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['sno', 'studentname', 'userid', 'subGroup','group','phoneNo','registeredDate','edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openEditDialog(element?: any): void {
    const dialogRef = this.dialog.open(AddEditStudentComponent, {
      width: '400px', // Adjust the width as needed
      data: element // Pass the element data to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed, if needed
    });
  }
  
}
