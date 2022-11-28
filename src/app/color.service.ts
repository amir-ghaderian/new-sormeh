import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors: Array<color> = [
    { id: 1, title: "مشکی", rgp: "#000000" },
    { id: 1, title: "سبز آبی", rgp: "#33bea2" },
    { id: 1, title: "صورتی چرک", rgp: "#dc9dcb" },
    { id: 1, title: "سفید", rgp: "#ffffff" },
    { id: 1, title: "طوسی روشن", rgp: "#d9d9d9" },
    { id: 1, title: "قرمز", rgp: "#e71313" },
    { id: 1, title: "گل بهی", rgp: "#f58452" },
    { id: 1, title: "نسکافه", rgp: "#cd842c" }

  ]

}
export class color {
  id: number;
  title: string;
  rgp: string;
  constructor(_id: number, _title: string, _rgp: string) {
    this.id = _id;
    this.title = _title;
    this.rgp = _rgp;
  }
}
