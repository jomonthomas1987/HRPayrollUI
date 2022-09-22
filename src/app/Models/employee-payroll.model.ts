import { Employee } from "./employee.model";

export interface EmployeePayroll extends Employee {
    salaryId:number,
    employeedId:number,
    basicPay:number,
    hra:number,
    conveyance:number,
    deductionAmount:number,
    deductionReason:string,
    active:number
}
