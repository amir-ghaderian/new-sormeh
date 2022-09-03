import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  alert:boolean=false;
  customer: Array<any> = []
  constructor(svCustomer: CustomerService) {
    this.customer = svCustomer.customer;
  }
  @Input() newCustomer: any = {
    customerName: "",
    customerSurName:"",
    customerEmail: "",
    phoneNmber: 0,

  }
  ngOnInit(): void {
  }
  addCustomer() {
    this.customer.push(this.newCustomer);
    this.alert=true
  }
  closeAlert(){
    this.alert=false
  }

}
