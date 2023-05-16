import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-tests',
  templateUrl: './publish-tests.component.html',
  styleUrls: ['./publish-tests.component.css']
})
export class PublishTestsComponent implements OnInit {


  ngOnInit(): void {
  }

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['index', 'testName',  'publishDateTime', 'startDate','testStatus', 'action'];
  selectedRow: any = null;

  constructor(
    private route : Router
  ) {
    // Generate dummy data for the table rows
    const dummyData: any = [
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
      { testName: 'FLPR Assessment - FLPR',  publishDateTime: '15-05-2023 18:30',startDate: '15-05-2023 18:19', testStatus: 'PUBLISHED' },
    
    ];

    this.dataSource = new MatTableDataSource(dummyData);
  }

  getIndex(row: any): number {
    return this.dataSource.data.indexOf(row) + 1;
  }

  editTest(row: any) {
    // Handle edit action here
    console.log("edit here");
    this.route.navigate(['questions-cover-page'])
  }

  selectRow(row: any) {
    this.selectedRow = row;
  }

}
