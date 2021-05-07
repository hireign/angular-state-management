// Declare the customers that are observable at the top of the class and 
// modify the constructor and use the selector to get Observable of Customers
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Customer } from '../../models/customer';
import { selectCustomers } from '../store/selector/customer.selectors';
import { CustomerState } from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

}
