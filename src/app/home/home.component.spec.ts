import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('getData() should return "Data"', () => {
  //   expect(component.getData()).toEqual('Data OK');
  // });

  it('getCustomer() should return a Customer object', () => {
    expect(component.getCustomer()).toBeTruthy();
  });

  it('getCustomer() should return a Customer object with "firstname" as "John"', () => {
    expect(component.getCustomer().firstname).toEqual('John');
  });

  it('getCustomerWithId() should return a Customer object with "id" as "1"', () => {
    expect(component.getCustomerWithId(1).id).toEqual(1);
  });

  it('getCustomerWithId() should return a null', () => {
    expect(component.getCustomerWithId(0)).toBeFalsy();
  });
});
