import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LoginComponent } from './shared/login/login.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreviewTestComponent } from './preview-test/preview-test.component';
import { EditTeacherProfileComponent } from './teacher/edit-teacher-profile/edit-teacher-profile.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { TestsComponent } from './student/tests/tests.component';
import { EditStudentProfileComponent } from './student/edit-student-profile/edit-student-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent,
    data: { showHeaderSidemenu: false } },
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
    path: 'create-test',
    component: TestStructureComponent,
    children: [
      { path: '', redirectTo: 'basic-details', pathMatch: 'full' },
      { path: 'basic-details', component: AddBasicDetailsComponent },
      { path: 'make-test-structure', component: MakeTestStructureComponent },
      { path: 'add-question', component: AddQuestionsComponent },
      { path: 'test-preview', component: PreviewTestComponent },
    ]
  } ,
  {
    path:'edit-teacher-profile',
    component:EditTeacherProfileComponent,
  },
  {
    path:"student-dashboard",
    component:StudentDashboardComponent
  },
  {
    path:"student-tests",
    component:TestsComponent
  } ,
  {
    path:'edit-student-profile',
    component:EditStudentProfileComponent,
  } ,
  {
    path:'questions-cover-page',
    component:QuestionsCoverPageComponent,
    data: { showHeaderSidemenu: false }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
