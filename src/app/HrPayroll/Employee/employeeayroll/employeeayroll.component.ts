import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeepayrollService } from 'src/app/HarPayrollServices/employeepayroll.service';
import { EmployeePayroll } from 'src/app/Models/employee-payroll.model';

@Component({
  selector: 'app-employeeayroll',
  templateUrl: './employeeayroll.component.html',
  styleUrls: ['./employeeayroll.component.css']
})
export class EmployeeayrollComponent implements OnInit {

  employeePayrollList: EmployeePayroll[] = [];

  constructor(private router: Router, private employeePayrollService: EmployeepayrollService) { }

  ngOnInit(): void {
    this.getAllEmployeePayroll();
  }

  async getAllEmployeePayroll() {
    this.employeePayrollService.getAllEmployeePayroll().subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            console.log(resultData);
            this.employeePayrollList = resultData;
            console.log(this.employeePayrollList);
          }
        }
      },
      error: (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.employeePayrollList = [];
            }
          }
        }
      }
    });
  }

  AddEmployeePayroll() {
    this.router.navigate(['dashboard/AddEmployeePayroll']);
  }
}
