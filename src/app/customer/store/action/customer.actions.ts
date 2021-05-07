// the state that we are going to manage is the collection of customers. 
// We can change the collection of the customer's state using the actions.
import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const addCustomer = createAction(
  '[Customer] Add Customer',
    (customer: Customer) => ({ customer })
);