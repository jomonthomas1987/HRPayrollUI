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
      this.employeepayrollService.saveEmployeePayroll(this.addEmployeeForm).subscribe({
        next: async data => {
          if (data != null && data.body != null) {
            if (data != null && data.body != null) {
              var resultData = data.body;
              if (resultData != null && resultData.isSuccess) {
                //this.toastr.success(resultData.message);
                setTimeout(() => {
                  this.router.navigate(['/Home']);
                }, 500);
              }
            }
          }
        },
        error: async error => {
          //this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        }
      });
    }
  }

  getEmployeePayrollDetailById() {
    this.employeepayrollService.getEmployeePayrollDetailById(this.employeePayrollId).subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.addEmployeeForm.PayrollId = resultData.id;
            this.addEmployeeForm.FirstName = resultData.firstName;
            this.addEmployeeForm.LastName = resultData.lastName;
            this.addEmployeeForm.Email = resultData.email;
            this.addEmployeeForm.Address = resultData.address;
            this.addEmployeeForm.Phone = resultData.phone;
          }
        }
      },
      error: (error: any) => { }
    });
  }

}

export class employeePayrollForm {
  PayrollId: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}
