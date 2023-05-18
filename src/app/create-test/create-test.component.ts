import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  
  activeStep: number = 1;

  constructor(private route: ActivatedRoute) {
  }

 
  ngOnInit() {
    this.route.url.subscribe(url => {
      const path = url[0].path;
      switch (path) {
        case 'basic-details':
          this.activeStep = 1;
          break;
        case 'test-structure':
          this.activeStep = 2;
          break;
        // Handle other steps if needed
        default:
          this.activeStep = 1;
          break;
      }
    });
  }

  setActiveStep(step: number) {
    this.activeStep = step;
  }

}
