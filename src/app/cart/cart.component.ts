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
  sam: number = 0;
  constructor(scsc: ShoppingCartService, svCustomer: CustomerService) {
    this.cart = scsc.cart;
    this.customer = svCustomer.customer;
  }

  ngOnInit(): void {
    this.prices = this.cart.map((a: { price: number; }) => a.price);

    for (var i = 0; i < this.prices.length; i++) {
      this.sam += this.prices[i]
    }

  }




}
