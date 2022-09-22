import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProviderService } from './http-provider.service';

var apiUrl = "http://localhost:8100/";

var httpLink = {
  getAllEmployeePayroll: apiUrl + "/api/employee/getAllEmployeePayroll",
  deleteEmployeePayrollById: apiUrl + "/api/employee/deleteEmployeePayrollById",
  getEmployeePayrollDetailById: apiUrl + "/api/employee/getEmployeePayrollDetailById",
  saveEmployeePayroll: apiUrl + "/api/employee/saveEmployeePayroll"
}

@Injectable({
  providedIn: 'root'
})
export class EmployeepayrollService {

  constructor(private httpProviderService: HttpProviderService) { }

  public getAllEmployeePayroll(): Observable<any> {
    return this.httpProviderService.get(httpLink.getAllEmployeePayroll);
  }
  public deleteEmployeePayrollById(model: any): Observable<any> {
    return this.httpProviderService.post(httpLink.deleteEmployeePayrollById + '?employeeId=' + model, "");
  }
  public getEmployeePayrollDetailById(model: any): Observable<any> {
    return this.httpProviderService.get(httpLink.getEmployeePayrollDetailById + '?employeeId=' + model);
  }
  public saveEmployeePayroll(model: any): Observable<any> {
    return this.httpProviderService.post(httpLink.saveEmployeePayroll, model);
  }  
}