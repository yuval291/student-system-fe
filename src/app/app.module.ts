import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRotingModule , routingComponent} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { AgGridModule } from 'ag-grid-angular';  
import { ButtonRendererComponent } from './course-table/ButtonRendererComponent.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavbarComponent,
    EditUserComponent,
    CourseTableComponent,
    ButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRotingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
