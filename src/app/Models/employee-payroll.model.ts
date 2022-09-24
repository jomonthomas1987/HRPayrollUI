import { Employee } from "./employee.model";

export interface EmployeePayroll {
    id: number,
    employeeName: string,
    employeeId: number,
    basicpay: number,
    hra: number,
    conveyanceAllowance: number,
    deductionAmount: number,
    active: number
}
