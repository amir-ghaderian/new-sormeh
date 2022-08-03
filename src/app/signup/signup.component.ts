import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  customer: Array<any> = []
  constructor() { }
  @Input() newCustomer: any = {
    customerName: "",
    customerEmail: "",
    phoneNmber: 0,

  }
  ngOnInit(): void {
  }
  addCustomer() {
    this.customer.push (this.newCustomer);
    console.log(this.customer)
  }

}
