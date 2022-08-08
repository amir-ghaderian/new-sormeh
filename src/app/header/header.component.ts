import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shopingCart: any;
 
  constructor(svSc: ShoppingCartService) {
    this.shopingCart = svSc.cart;
  }

  ngOnInit(): void {

   
  }

}
