import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpProviderService } from './http-provider.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpProviderService: HttpProviderService) { }

  public getAllEmployee(): Observable<any> {
    return this.httpProviderService.get(environment.apiUrl + environment.getAllEmployee);
  }

  public getEmployeeDetailById(model: any): Observable<any> {
    return this.httpProviderService.get(environment.apiUrl + environment.getEmployeeDetailById + '?employeeId=' + model);
  }
  public saveEmployee(model: any): Observable<any> {
    return this.httpProviderService.post(environment.apiUrl + environment.saveEmployee, model);
  }
}
