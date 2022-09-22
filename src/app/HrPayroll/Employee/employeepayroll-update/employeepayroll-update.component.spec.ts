import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepayrollUpdateComponent } from './employeepayroll-update.component';

describe('EmployeepayrollUpdateComponent', () => {
  let component: EmployeepayrollUpdateComponent;
  let fixture: ComponentFixture<EmployeepayrollUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepayrollUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepayrollUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
