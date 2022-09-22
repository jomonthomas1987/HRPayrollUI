import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeayrollComponent } from './employeeayroll.component';

describe('EmployeeayrollComponent', () => {
  let component: EmployeeayrollComponent;
  let fixture: ComponentFixture<EmployeeayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeayrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
