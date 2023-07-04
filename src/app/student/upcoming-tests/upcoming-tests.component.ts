import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-tests',
  templateUrl: './upcoming-tests.component.html',
  styleUrls: ['./upcoming-tests.component.css']
})
export class UpcomingTestsComponent implements OnInit {

  constructor() { }
  exams: any = [
    { examName: 'ABC', examDate: '24-11-2024' },
    { examName: 'DEF', examDate: '25-11-2024' },
    { examName: 'GHI', examDate: '26-11-2024' },
    { examName: 'JKL', examDate: '27-11-2024' },
    { examName: 'MNO', examDate: '28-11-2024' }
  ];

  viewDetails(exam: any) {
    // Implement the logic to view exam details here
    console.log('View details for', exam.examName);
  }


  ngOnInit(): void {
  }

}
