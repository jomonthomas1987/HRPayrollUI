import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/HarPayrollServices/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  addEmployeeForm: employeeForm = new employeeForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;
  employeeId: any;

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeId = this.route.snapshot.params['employeeId'];
    this.getEmployeeDetailById();
  }

  AddEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.employeeService.saveEmployee(this.addEmployeeForm).subscribe({
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

  getEmployeeDetailById() {
    this.employeeService.getEmployeeDetailById(this.employeeId).subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.addEmployeeForm.Id = resultData.id;
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

export class employeeForm {
  Id: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}
