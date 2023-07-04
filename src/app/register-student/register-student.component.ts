import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStudentComponent } from '../add-edit-student/add-edit-student.component';
import { HttpClient } from '@angular/common/http';

export interface Student {
  StudentName: string;
  userId: string;
  subGroup: string;
  group: string;
  phoneNo:number,
  registeredDate:string,
  }

// const ELEMENT_DATA: Student[] = [
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Tushita', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Tushita', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},
//   {StudentName: 'Priyanshi', userId: 'pri@gmail.com', subGroup: 'Vibgyor', group: 'Individual',phoneNo:8178298372, registeredDate:"2023-05-01"},

// ];

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private http : HttpClient
    ) { }

    ELEMENT_DATA: any[] =[]


 async ngOnInit() {
   this.fetchStudents();
  }

  displayedColumns: string[] = ['sno', 'name', 'email', 'group','subGroup','phoneNo','view'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openEditDialog(element?: any): void {
    const dialogRef = this.dialog.open(AddEditStudentComponent, {
      width: '800px',
      height:'85vh',
      data: element    
     });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed, if needed
    });
  }


  fetchStudents(): void {
    this.http.get<any[]>('http://localhost:4200/studentAuth').subscribe(
      (data:any) => {
        
        // this.ELEMENT_DATA = data;
        const studentList= data["students"]
        this.ELEMENT_DATA = studentList;

        console.log("this.ELEMENT_DATA",this.ELEMENT_DATA);
        this.dataSource.data = this.ELEMENT_DATA;
      },
      error => {
        // Handle error response here
        console.error(error);
      }
    );
  }
  
}
