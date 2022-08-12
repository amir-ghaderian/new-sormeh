import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Array<information> = []


}
export class information {
  customerName: string;
  customerSurName: string;
  customerEmail: string;
  phoneNmber: number;
  constructor(_customerName: string, _customerEmail: string, _phoneNmber: number, _customerSurName: string) {
    this.customerName = _customerName;
    this.customerEmail = _customerEmail;
    this.phoneNmber = _phoneNmber;
    this.customerSurName = _customerSurName;
  }
}
