import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-cover-page',
  templateUrl: './questions-cover-page.component.html',
  styleUrls: ['./questions-cover-page.component.css']
})
export class QuestionsCoverPageComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }


  startTest(){
    this.route.navigate(['test-screen'])
  }
}
