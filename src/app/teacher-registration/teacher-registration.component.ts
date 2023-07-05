import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTeacherComponent } from '../add-edit-teacher/add-edit-teacher.component';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit {

  constructor(private dialog : MatDialog,
    private http : HttpClient) { }

    ELEMENT_DATA: any[] =[]


    async ngOnInit() {
      this.fetchTeachers();
     }

  displayedColumns: string[] = ['sno', 'name', 'email','phoneNo','view'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

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

  fetchTeachers(): void {
    this.http.get<any[]>('http://localhost:4200/getTeachers').subscribe(
      (data:any) => {
        
        // this.ELEMENT_DATA = data;
        const studentList= data["teachers"]
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
