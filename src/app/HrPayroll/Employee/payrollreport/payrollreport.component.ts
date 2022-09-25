import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeepayrollService } from 'src/app/HarPayrollServices/employeepayroll.service';
import { EmployeeMonthlyPayroll } from 'src/app/Models/employee-payroll.model';

@Component({
  selector: 'app-payrollreport',
  templateUrl: './payrollreport.component.html',
  styleUrls: ['./payrollreport.component.css']
})
export class PayrollreportComponent implements OnInit {

  reportForm: ReportForm = new ReportForm();
  isSubmitted: boolean = false;

  employeePayrollList: EmployeeMonthlyPayroll[] = [];
  
  constructor(private router: Router, private employeePayrollService: EmployeepayrollService) { }

  ngOnInit(): void {
    this.getAllEmployeePayroll();
  }

  async getAllEmployeePayroll() {
    this.employeePayrollService.EmployePayrollReport().subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
           // console.log(resultData);
            this.employeePayrollList = resultData;
            //console.log(this.employeePayrollList);
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

  GeneratePayrollForAllEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.employeePayrollService.GeneratePayrollForAllEmployee(this.reportForm.Month,this.reportForm.Year).subscribe({
        next: async data => {
          if (data != null && data.body != null) {
            if (data != null && data.body != null) {
              var resultData = data.body;
              if (resultData != null && resultData.isSuccess) {
                setTimeout(() => {
                  this.getAllEmployeePayroll();
                }, 500);
              }
            }
          }
        },
        error: async error => {
          //this.toastr.error(error.message);
          setTimeout(() => {
            this.getAllEmployeePayroll();
          }, 500);
        }
      });
    }
  }

}


export class ReportForm {
  Month: number = 0;
  Year: number = 0;
}
