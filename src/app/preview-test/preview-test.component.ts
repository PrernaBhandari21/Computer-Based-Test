import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-test',
  templateUrl: './preview-test.component.html',
  styleUrls: ['./preview-test.component.css']
})
export class PreviewTestComponent implements OnInit {

  constructor() { }

  questions: any[] = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi!',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi!',
      options: ['Option A', 'Option B', 'Option C', 'Option D']
    },
  ];
  ngOnInit(): void {
  }

}
