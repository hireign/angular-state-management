// Generate a selector to get the customers from the Store
import { formatCurrency } from '@angular/common';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey
);

export const selectCustomers = createSelector(
    selectCustomerState,
    (state: fromCustomer.CustomerState) => state.customers
);