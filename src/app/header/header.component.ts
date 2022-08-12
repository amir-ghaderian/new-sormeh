import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shopingCart: any;
  customer: any;
  constructor(svSc: ShoppingCartService, svCustomer: CustomerService) {
    this.shopingCart = svSc.cart;
    this.customer=svCustomer.customer;
  }

  ngOnInit(): void {


  }

}
