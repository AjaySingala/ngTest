import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customer: Customer;

  constructor() { }

  ngOnInit() {
  }

  getData() {
    return 'Data';
  }

  getCustomer() {
    this.customer = new Customer();
    this.customer.id = 1;
    this.customer.firstname = 'John';
    this.customer.lastname = 'Smith';

    return this.customer;
  }

  getCustomerWithId(id) {
    if(id === 0 || id == null) {
      return null;
    }
    this.customer = new Customer();
    this.customer.id = id;
    this.customer.firstname = 'John';
    this.customer.lastname = 'Smith';

    return this.customer;
  }
}
