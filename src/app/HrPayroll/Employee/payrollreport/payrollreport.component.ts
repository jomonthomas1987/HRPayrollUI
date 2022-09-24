import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payrollreport',
  templateUrl: './payrollreport.component.html',
  styleUrls: ['./payrollreport.component.css']
})
export class PayrollreportComponent implements OnInit {

  reportForm: ReportForm = new ReportForm();
  isSubmitted: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}


export class ReportForm {
  Month: number = 0;
  Year: string = "";
}
