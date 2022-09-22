import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeUpdateComponent } from './HrPayroll/Employee/employee-update/employee-update.component';
import { EmployeeViewComponent } from './HrPayroll/Employee/employee-view/employee-view.component';
import { EmployeeayrollComponent } from './HrPayroll/Employee/employeeayroll/employeeayroll.component';
import { EmployeepayrollUpdateComponent } from './HrPayroll/Employee/employeepayroll-update/employeepayroll-update.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'EmployeeList', component: EmployeeViewComponent },
  { path: 'EditEmployee/:employeeId', component: EmployeeUpdateComponent },
  { path: 'AddEmployee', component: EmployeeUpdateComponent },
  { path: 'EmployeePayrollList', component: EmployeeayrollComponent },
  { path: 'EditEmployeePayroll/:employeeId', component: EmployeepayrollUpdateComponent },
  { path: 'AddEmployeePayroll', component: EmployeepayrollUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
