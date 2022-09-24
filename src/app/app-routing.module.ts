import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './HarPayrollServices/Auth/auth/auth.guard';
import { DashboardComponent } from './HrPayroll/Employee/dashboard/dashboard.component';
import { EmployeeUpdateComponent } from './HrPayroll/Employee/employee-update/employee-update.component';
import { EmployeeViewComponent } from './HrPayroll/Employee/employee-view/employee-view.component';
import { EmployeeayrollComponent } from './HrPayroll/Employee/employeeayroll/employeeayroll.component';
import { EmployeepayrollUpdateComponent } from './HrPayroll/Employee/employeepayroll-update/employeepayroll-update.component';
import { PayrollreportComponent } from './HrPayroll/Employee/payrollreport/payrollreport.component';
import { HomeComponent } from './HrPayroll/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'EmployeeList', component: EmployeeViewComponent, canActivate: [AuthGuard] },
      { path: 'Payrollreport', component: PayrollreportComponent, canActivate: [AuthGuard] },
      { path: 'AddEmployee', component: EmployeeUpdateComponent, canActivate: [AuthGuard] },
      { path: 'EmployeePayrollList', component: EmployeeayrollComponent, canActivate: [AuthGuard] },
      { path: 'EditEmployeePayroll/:employeeId', component: EmployeepayrollUpdateComponent, canActivate: [AuthGuard] },
      { path: 'AddEmployeePayroll', component: EmployeepayrollUpdateComponent, canActivate: [AuthGuard] }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
