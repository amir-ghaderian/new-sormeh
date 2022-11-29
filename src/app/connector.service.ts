import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  printToConsole(arg: string) {
    console.log(arg)
  }
  currentImge: string[] = [];
  currentIndex: number[] = [];
  public clothes: any = [
    { id: 45, title: "بارانی تو خز", images: ["assets/pic/14.JPG", "assets/pic/15.JPG", "assets/pic/16.JPG", "assets/pic/17.JPG"], tagId: [2, 4, 5], size: ['1', '2'], price: 499000, colorId: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: 46, title: "کت فوتر", images: ["assets/pic/18.JPG", "assets/pic/19.JPG", "assets/pic/20.JPG", "assets/pic/21.JPG", "assets/pic/22.JPG"], tagId: [1, 4, 0], size: ['1', '2', '3', '4'], price: 468000, colorId: [9, 10, 11, 1, 8] },
    { id: 47, title: "اورکت ضد آب", images: ["assets/pic/26.JPG", "assets/pic/27.JPG", "assets/pic/25.JPG", "assets/pic/24.JPG"], tagId: [3, 5, 1], size: ['M', "L", "XL", "XXL"], price: 498000, colorId: [14, 1, 12, 11, 4, 13] },
    { id: 48, title: "مانتو مدل هلیا", images: ["assets/pic/2.jpg", "assets/pic/8.jpg"], tagId: [1, 4, 6], size: ['38', '40', '42'], price: 298000, colorId: [] },
    { id: 49, title: "مانتو مدل سرخ پوش", images: ["assets/pic/3.jpg", "assets/pic/7.jpg"], tagId: [2, 3, 6], size: ['Freesize'], price: 298000, colorId: [] },
    { id: 50, title: "مانتو مدل آیدا", images: ["assets/pic/4.jpg", "assets/pic/6.jpg", "assets/pic/5.jpg", "assets/pic/4.jpg"], tagId: [1, 0, 4], size: ["Freesize"], price: 498000, colorId: [] },
    { id: 51, title: "مانتو مدل وفا", images: ["assets/pic/5.jpg", "assets/pic/5.jpg"], tagId: [3, 0], size: ['1', '2', '3', '4'], price: 235000, colorId: [] },
    { id: 52, title: "مانتو مدل یفه سگگک", images: ["assets/pic/6.jpg", "assets/pic/4.jpg"], tagId: [2, 1, 3, 5, 6], size: ['1', '2', '3'], price: 298000, colorId: [] },
    { id: 53, title: "مانتو مدل کتی", images: ["assets/pic/7.jpg", "assets/pic/3.jpg"], tagId: [4, 3], size: ['Freesize'], price: 368000, colorId: [] },
    { id: 54, title: "مانتو مدل رامن", images: ["assets/pic/8.jpg", "assets/pic/2.jpg"], tagId: [1, 2, 3, 4, 5, 6], size: ['S', 'M', 'L', 'XL'], price: 198000, colorId: [] },
    { id: 55, title: "مانتو مدل سوسکی", images: ["assets/pic/9.jpg", "assets/pic/1.jpg", "assets/pic/5.jpg", "assets/pic/4.jpg"], tagId: [2, 5], size: ['XS', 'XM', 'S'], price: 398000, colorId: [] },
    { id: 56, title: "مانتو مدل آناهیتا", images: ["assets/pic/11.jpg", "assets/pic/1.jpg", "assets/pic/5.jpg", "assets/pic/4.jpg"], tagId: [4, 5], size: ['38', '40', '42', '44', '46'], price: 198000, colorId: [] }
  ]

  constructor() {

  }


}
