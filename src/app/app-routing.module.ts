import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { CollectionStructureComponent } from './collection-structure/collection-structure.component';
import { TestStructureComponent } from './test-structure/test-structure.component';
import { TestScreenComponent } from './test-screen/test-screen.component';
import { QuestionsCoverPageComponent } from './questions-cover-page/questions-cover-page.component';

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
  },
  {
    path:'test-screen',
    component:TestScreenComponent
  },
  {
    path:'questions-cover-page',
    component:QuestionsCoverPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
