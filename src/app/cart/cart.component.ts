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
  prices: any;
  sum: number = 0;
  index: any
  constructor(scsc: ShoppingCartService, svCustomer: CustomerService) {
    this.cart = scsc.cart;
    this.customer = svCustomer.customer;

  }

  ngOnInit(): void {
    this.prices = this.cart.map((a: { price: number; }) => a.price);

    for (var i = 0; i < this.prices.length; i++) {
      this.sum += this.prices[i]
    }

  }

  remove(i: any) {
    this.index = this.cart.indexOf(i);
    
    if (this.index !== -1) {
      this.cart.splice(this.index, 1);
    }
  }


}
