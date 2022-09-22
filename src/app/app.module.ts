import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './HrPayroll/Employee/employee-view/employee-view.component';
import { EmployeeUpdateComponent } from './HrPayroll/Employee/employee-update/employee-update.component';
import { HomeComponent } from './HrPayroll/home/home.component';
import {  EmployeepayrollUpdateComponent } from './HrPayroll/Employee/employeepayroll-update/employeepayroll-update.component';
import { EmployeeayrollComponent } from './HrPayroll/Employee/employeeayroll/employeeayroll.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeUpdateComponent,
    HomeComponent,
    EmployeepayrollUpdateComponent,
    EmployeeayrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
