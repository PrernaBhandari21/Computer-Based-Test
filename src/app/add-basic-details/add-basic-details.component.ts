import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-basic-details',
  templateUrl: './add-basic-details.component.html',
  styleUrls: ['./add-basic-details.component.css']
})
export class AddBasicDetailsComponent implements OnInit {

  testNameFormControl: FormControl;
  groupFormControl = new FormControl();
  subgroupFormControl = new FormControl();
  
  constructor() {
    this.testNameFormControl = new FormControl('', [Validators.required]);
  }

  groups: string[] = ['Group 1', 'Group 2', 'Group 3'];
subgroups: string[] = ['Subgroup 1', 'Subgroup 2', 'Subgroup 3'];
testTypes: string[] = ['Test 1', 'Test 2', 'Test 3'];


  ngOnInit(): void {
  }
}
