import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { CollectionStructureComponent } from './collection-structure/collection-structure.component';
import { TestStructureComponent } from './test-structure/test-structure.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'student-registration',
    component:StudentRegistrationComponent
  },
  {
    path:'teacher-registration',
    component:TeacherRegistrationComponent
  },
  {
    path:'question-bank',
    component:QuestionBankComponent
  },
  {
    path:'collection-structure',
    component:CollectionStructureComponent
  },
  {
    path:'test-structure',
    component:TestStructureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
