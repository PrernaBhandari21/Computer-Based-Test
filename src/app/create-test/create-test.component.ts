import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  
  activeStep: number = 1;

  constructor(private route: ActivatedRoute,
    private router : Router) {
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

  moveToNextStep() {
    // Increment the activeStep
    this.activeStep++;

    // Navigate to the next step
    switch (this.activeStep) {
      case 2:
        this.router.navigate(['/create-test/make-test-structure']);
        break;
      case 3:
        this.router.navigate(['/create-test/add-question']);
        break;
      case 4:
        this.router.navigate(['/create-test/test-preview']);
        break;
      // Add cases for additional steps if needed
      default:
        break;
    }
  }

  setActiveStep(step: number) {
    this.activeStep = step;
  }

}
