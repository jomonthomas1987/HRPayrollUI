import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './HrPayroll/Employee/employee-view/employee-view.component';
import { EmployeeUpdateComponent } from './HrPayroll/Employee/employee-update/employee-update.component';
import { HomeComponent } from './HrPayroll/home/home.component';
import { EmployeepayrollUpdateComponent } from './HrPayroll/Employee/employeepayroll-update/employeepayroll-update.component';
import { EmployeeayrollComponent } from './HrPayroll/Employee/employeeayroll/employeeayroll.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './HrPayroll/Employee/dashboard/dashboard.component';
import { HeadersInterceptor } from './HarPayrollServices/Auth/auth/headers.interceptor';
import { PayrollreportComponent } from './HrPayroll/Employee/payrollreport/payrollreport.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeUpdateComponent,
    HomeComponent,
    EmployeepayrollUpdateComponent,
    EmployeeayrollComponent,
    DashboardComponent,
    PayrollreportComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
