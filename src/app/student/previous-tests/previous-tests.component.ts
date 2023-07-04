import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-tests',
  templateUrl: './previous-tests.component.html',
  styleUrls: ['./previous-tests.component.css']
})
export class PreviousTestsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


  exams = [
    { examName: 'Exam 1', examDate: '2023-01-01' },
    { examName: 'Exam 2', examDate: '2023-02-01' },
    { examName: 'Exam 3', examDate: '2023-03-01' },
    // Add more exam objects here
  ];

  viewDetails(exam: any) {
    console.log('View Details', exam);
    // Add your logic for viewing details of the selected exam
  }
}


