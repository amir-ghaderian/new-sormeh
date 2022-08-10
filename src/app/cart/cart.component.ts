import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:any;
  constructor(scsc:ShoppingCartService) {
this.cart=scsc.cart;
   }

  ngOnInit(): void {
    console.log(this.cart)
  }

}
