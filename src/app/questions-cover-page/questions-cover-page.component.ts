import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExamCompletionScreenComponent } from '../student/exam-completion-screen/exam-completion-screen.component';

@Component({
  selector: 'app-questions-cover-page',
  templateUrl: './questions-cover-page.component.html',
  styleUrls: ['./questions-cover-page.component.css']
})
export class QuestionsCoverPageComponent implements OnInit {

  constructor(
    private route : Router,
  ) { }



  ngOnInit(): void {
  }


  startTest(){
    this.route.navigate(['test-screen'])
  }


}
