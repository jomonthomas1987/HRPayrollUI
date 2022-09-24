import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProviderService } from './http-provider.service';


var apiUrl = "https://localhost:44330";

var httpLink = {
  getAllEmployee: apiUrl + "/api/Employee/ViewAllEmployee",
  deleteEmployeeById: apiUrl + "/api/employee/deleteEmployeeById",
  getEmployeeDetailById: apiUrl + "/api/employee/getEmployeeDetailById",
  saveEmployee: apiUrl + "/api/Employee/AddEmployee"
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpProviderService: HttpProviderService) { }

  public getAllEmployee(): Observable<any> {
    return this.httpProviderService.get(httpLink.getAllEmployee);
  }
  public deleteEmployeeById(model: any): Observable<any> {
    return this.httpProviderService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }
  public getEmployeeDetailById(model: any): Observable<any> {
    return this.httpProviderService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }
  public saveEmployee(model: any): Observable<any> {
    return this.httpProviderService.post(httpLink.saveEmployee, model);
  }  
}
