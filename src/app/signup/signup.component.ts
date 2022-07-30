import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Customer:any=[{
    name: '',
    email:'',
    phoneNumber:0


  }]
  constructor() { }

  ngOnInit(): void {
  }
  addCustomer(){
console.log(this.Customer)
  }

}
