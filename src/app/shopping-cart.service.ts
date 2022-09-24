import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  cart: Array<item> = []

}
export class item {
  size: string;
  id: number;
  title:string;
  image:string;
  price:string;
  quntitiy:number=0
  constructor(_size: string, _id: number,_title:string,_image:string,_price:string,_quntity:number) {
    this.size = _size;
    this.id = _id;
    this.title=_title;
    this.image=_image;
    this.price=_price;
    this.quntitiy=_quntity
  }
}
