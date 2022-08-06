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
  constructor(_size: string, _id: number) {
    this.size = _size;
    this.id = _id;
  }
}
