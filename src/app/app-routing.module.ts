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
import { CreateTestComponent } from './create-test/create-test.component';
import { AddBasicDetailsComponent } from './add-basic-details/add-basic-details.component';
import { MakeTestStructureComponent } from './make-test-structure/make-test-structure.component';

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
  { path: 'test-screen', 
  component: TestScreenComponent, 
  data: { showHeaderSidemenu: false } },

  {
    path:'questions-cover-page',
    component:QuestionsCoverPageComponent,
    data: { showHeaderSidemenu: false }
  },
  {
    path: 'create-test',
    component: CreateTestComponent,
    children: [
      { path: '', redirectTo: 'basic-details', pathMatch: 'full' },
      { path: 'basic-details', component: AddBasicDetailsComponent },
      { path: 'make-test-structure', component: MakeTestStructureComponent },
      { path: 'add-question', component: AddBasicDetailsComponent },
      { path: 'test-preview', component: TestStructureComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
