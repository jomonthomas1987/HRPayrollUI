import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeepayrollService } from 'src/app/HarPayrollServices/employeepayroll.service';

@Component({
  selector: 'app-employeepayroll-update',
  templateUrl: './employeepayroll-update.component.html',
  styleUrls: ['./employeepayroll-update.component.css']
})
export class EmployeepayrollUpdateComponent implements OnInit {

  addEmployeeForm: employeePayrollForm = new employeePayrollForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;
  employeePayrollId: any;

  constructor(private router: Router, private route: ActivatedRoute, private employeepayrollService: EmployeepayrollService) { }

  ngOnInit(): void {
  }

  AddEmployeePayroll(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      //this.addEmployeeForm.Id  = this.addEmployeeForm.EmployeeId ;      
      this.employeepayrollService.saveEmployeePayroll(this.addEmployeeForm).subscribe({
        next: async data => {
          if (data != null && data.body != null) {
            if (data != null && data.body != null) {
              var resultData = data.body;
              if (resultData != null && resultData.isSuccess) {
                //this.toastr.success(resultData.message);
                setTimeout(() => {
                  this.router.navigate(['/dashboard/EmployeePayrollList/']);
                }, 500);
              }
            }
          }
        },
        error: async error => {
          //this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/dashboard/EmployeePayrollList/']);
          }, 500);
        }
      });
    }
  }

  /*getEmployeePayrollDetailById() {
    this.employeepayrollService.getEmployeePayrollDetailById(this.employeePayrollId).subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.addEmployeeForm.Id = resultData.Id;
            this.addEmployeeForm.EmployeeName = resultData.EmployeeName;
            this.addEmployeeForm.EmployeeId = resultData.EmployeeId;
            this.addEmployeeForm.Basicpay = resultData.Basicpay;
            this.addEmployeeForm.HRA = resultData.HRA;
            this.addEmployeeForm.ConveyanceAllowance = resultData.ConveyanceAllowance;
            this.addEmployeeForm.DeductionAmount = resultData.DeductionAmount;
            this.addEmployeeForm.active = resultData.active;
          }
        }
      },
      error: (error: any) => { }
    });
  }*/

}

export class employeePayrollForm {
  Id: number = 0;
  EmployeeName: string = "";
  EmployeeId: number = 0;
  Basicpay: number = 0;
  HRA: number = 0;
  ConveyanceAllowance: number = 0;
  DeductionAmount: number = 0;
  active: number = 1;
}
