import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'student-registration',
    component:StudentRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
