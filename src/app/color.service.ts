import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors: Array<color> = [
    { id: 1, title: "مشکی", rgp: "#000000" },
    { id: 2, title: "سبز آبی", rgp: "#33bea2" },
    { id: 3, title: "صورتی چرک", rgp: "#dc9dcb" },
    { id: 4, title: "سفید", rgp: "#ffffff" },
    { id: 5, title: "طوسی روشن", rgp: "#d9d9d9" },
    { id: 6, title: "قرمز", rgp: "#e71313" },
    { id: 7, title: "گل بهی", rgp: "#f58452" },
    { id: 8, title: "زرشکی", rgp: "#af0d0d" },
    { id: 9, title: "آبی آسمانی", rgp: "#87d1ed" },
    { id: 10, title: "نارنجی", rgp: "#da861a" },
    { id: 11, title: "کرم نخودی", rgp: "#f4d586" },

  ]

  public getColorTitle(colorId: number): string {
    const target = this.colors.find(c => c.id === colorId);
    if (target) {
      return target.title;
    }
    return '-'
  }
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
