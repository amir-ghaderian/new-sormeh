import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  customer: any;
  goz:any;
  constructor(scsc: ShoppingCartService, svCustomer: CustomerService) {
    this.cart = scsc.cart;
    this.customer = svCustomer.customer;
  }

  ngOnInit(): void {
    this.total()
  }
  total() {
    for (var i = 0; i < this.cart.length; i++) {
  this.goz= parseInt(this.cart[i].price);
console.log()
    }
  }
}
