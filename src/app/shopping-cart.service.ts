import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  public cart: Array<Item> = []
  yechi: any
  public addToCart(item: Item) {
    // for (var i = 0; i < this.cart.length; i++) {
    //   this.yechi = this.cart[i].id;
    //   if (this.yechi !== item.id) {
    //     console.log('tekrar')

    //   } else {
    //     this.cart.push(item);
    //   }
    // }



     item = this.yechi
     console.log(this.cart.indexOf(this.yechi))
     if (this.cart.indexOf(this.yechi) == -1) {
       this.cart.push(this.yechi);
     } else {
       console.log("tekrar");
     }
  }
}
export class Item {
  size: string;
  id: number;
  title: string;
  image: string;
  price: string;
  quntitiy: number = 0;
  totalPrice: number = 0;
  constructor(public _size: string, _id: number, _title: string, _image: string, _price: string, _quntity: number, _totalPrice: number) {
    this.size = _size;
    this.id = _id;
    this.title = _title;
    this.image = _image;
    this.price = _price;
    this.quntitiy = _quntity;
    this.totalPrice = _totalPrice;
  }
}
