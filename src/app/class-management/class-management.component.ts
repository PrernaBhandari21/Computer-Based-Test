import { Component, OnInit } from '@angular/core';
interface Student {
  name: string;
  email: string;
}

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css']
})



export class ClassManagementComponent implements OnInit {

  constructor() { }
  students: Student[] = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Mike Johnson', email: 'mike@example.com' }
  ];

  selectedStudents: Student[] = [];


  selectStudent(student: Student): void {
    this.students = this.students.filter(s => s.email !== student.email);
    this.selectedStudents = [...this.selectedStudents, student];
  }
  
  removeStudent(student:Student):void{
    this.selectedStudents = this.selectedStudents.filter(s=>s.email !== student.email);
    this.students = [...this.students, student]
  }
  
  
  ngOnInit(): void {
  }

}
