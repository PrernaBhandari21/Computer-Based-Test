import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from "ng-material-multilevel-menu";

import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ClassManagementComponent } from './class-management/class-management.component';

import { MatTableModule } from '@angular/material/table';

import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CollectionStructureComponent } from './collection-structure/collection-structure.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    DashboardComponent,
    StudentRegistrationComponent,
    RegisterStudentComponent,
    ClassManagementComponent,
    AddEditStudentComponent,
    TeacherRegistrationComponent,
    AddEditTeacherComponent,
    QuestionBankComponent,
    CollectionStructureComponent,
    ManageQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [ MultilevelMenuService,
          ],  bootstrap: [AppComponent]
})
export class AppModule { }
