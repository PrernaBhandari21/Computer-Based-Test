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

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    DashboardComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
    MatToolbarModule
  ],
  providers: [ MultilevelMenuService,
          ],  bootstrap: [AppComponent]
})
export class AppModule { }
