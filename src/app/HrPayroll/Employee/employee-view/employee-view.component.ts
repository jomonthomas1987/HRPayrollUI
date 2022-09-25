import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/HarPayrollServices/employee.service';
import { Employee } from 'src/app/Models/employee.model';


@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  async getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.employeeList = resultData;
            console.log('this.employeeList');
            console.log(this.employeeList);
            console.log('resultData');
            console.log(resultData);
          }
        }
      },
      error: (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.employeeList = [];
            }
          }
        }
      }
    });
  }

  AddEmployee() {
    this.router.navigate(['dashboard/AddEmployee']);
  }

  /*deleteEmployee(employee: any) {
    this.employeeService.deleteEmployeeById(employee.id).subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            //this.toastr.success(resultData.message);
            this.getAllEmployee();
          }
        }
      },
      error: (error: any) => { }
    });
  }*/

}
