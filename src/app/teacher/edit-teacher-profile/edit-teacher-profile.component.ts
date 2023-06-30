import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teacher-profile',
  templateUrl: './edit-teacher-profile.component.html',
  styleUrls: ['./edit-teacher-profile.component.css']
})
export class EditTeacherProfileComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      this.user = JSON.parse(storedUserString);
    }
  }

  onSubmit() {
    console.log("USER DETAILS ARE : ", this.user);
  }
}
