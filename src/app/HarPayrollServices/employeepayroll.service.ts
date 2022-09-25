import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpProviderService } from './http-provider.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeepayrollService {

  constructor(private httpProviderService: HttpProviderService) { }

  public getAllEmployeePayroll(): Observable<any> {
    return this.httpProviderService.get(environment.apiUrl + environment.getAllEmployeePayroll);
  }
  public EmployePayrollReport(): Observable<any> {
    return this.httpProviderService.get(environment.apiUrl + environment.EmployePayrollReport);
  }
  public GeneratePayrollForAllEmployee(Month: any, Year: any): Observable<any> {
    return this.httpProviderService.post(environment.apiUrl + environment.GeneratePayrollForAllEmployee + '?month=' + Month + '&year=' + Year, "");
  }
  public saveEmployeePayroll(model: any): Observable<any> {
    return this.httpProviderService.post(environment.apiUrl + environment.saveEmployeePayroll, model);
  }
}
