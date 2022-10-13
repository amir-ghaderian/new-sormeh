import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  cart: Array<item> = []


  addToCart(item: item) {

    let cos = new item(item._size, item.id, item.image, item.quntitiy, item.price, item.title, item.totalPrice)
    this.cart.push(cos)
  }
}
export class item {
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
