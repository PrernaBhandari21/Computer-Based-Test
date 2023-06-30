import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTeacherComponent } from '../add-edit-teacher/add-edit-teacher.component';

export interface  Teacher {
  TeacherName: string;
  userId: string;
  phoneNo:number,
  registeredDate:string,
  }

const ELEMENT_DATA:  Teacher[] = [
  {TeacherName: 'Riya', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Jaanvi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Tushita', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  {TeacherName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},

];


@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['sno', 'teachername', 'userid','phoneNo','registeredDate','edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openEditDialog(element?: any): void {
    const dialogRef = this.dialog.open(AddEditTeacherComponent, {
      width: '800px', // Adjust the width as needed
      height:'75vh',
      data: element // Pass the element data to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed, if needed
    });
  }

}
