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
    { id: 45, title: "مانتو مدل شاپرگ", images: ["assets/pic/1.jpg", "assets/pic/11.jpg", "assets/pic/4.jpg"], tagId: [2, 4, 5], size: ['M', 'L', 'Xl', 'XXL'], price: 298000 },
    { id: 46, title: "مانتو مدل آرزو", images: ["assets/pic/13.jpg", "assets/pic/10.jpg"], tagId: [1, 4, 0], size: ['38', '40', '42', '48', '50'], price: 198000 },
    { id: 47, title: "مانتو مدل برشکا", images: ["assets/pic/12.jpg", "assets/pic/9.jpg"], tagId: [3, 5, 1], size: ['Freesize'], price: 398000 },
    { id: 48, title: "مانتو مدل هلیا", images: ["assets/pic/2.jpg", "assets/pic/8.jpg"], tagId: [1, 4, 6], size: ['38', '40', '42'], price: 298000,},
    { id: 49, title: "مانتو مدل سرخ پوش", images: ["assets/pic/3.jpg", "assets/pic/7.jpg"], tagId: [2, 3, 6], size: ['Freesize'], price: 298000 },
    { id: 50, title: "مانتو مدل آیدا", images: ["assets/pic/4.jpg", "assets/pic/6.jpg", "assets/pic/5.jpg", "assets/pic/4.jpg"], tagId: [1, 0, 4], size: ["Freesize"], price: 498000 },
    { id: 51, title: "مانتو مدل وفا", images: ["assets/pic/5.jpg", "assets/pic/5.jpg"], tagId: [3, 0], size: ['1', '2', '3', '4'], price: 235000 },
    { id: 52, title: "مانتو مدل یفه سگگک", images: ["assets/pic/6.jpg", "assets/pic/4.jpg"], tagId: [2, 1, 3, 5, 6], size: ['1', '2', '3'], price: 298000},
    { id: 53, title: "مانتو مدل کتی", images: ["assets/pic/7.jpg", "assets/pic/3.jpg"], tagId: [4, 3], size: ['Freesize'], price: 368000 },
    { id: 54, title: "مانتو مدل رامن", images: ["assets/pic/8.jpg", "assets/pic/2.jpg"], tagId: [1, 2, 3, 4, 5, 6], size: ['S', 'M', 'L', 'XL'], price: 198000},
    { id: 55, title: "مانتو مدل سوسکی", images: ["assets/pic/9.jpg", "assets/pic/1.jpg", "assets/pic/5.jpg", "assets/pic/4.jpg"], tagId: [2, 5], size: ['XS', 'XM', 'S'], price: 398000 },
    { id: 56, title: "مانتو مدل آناهیتا", images: ["assets/pic/11.jpg", "assets/pic/1.jpg", "assets/pic/5.jpg", "assets/pic/4.jpg"], tagId: [4, 5], size: ['38', '40', '42', '44', '46'], price: 198000 }
  ]

  constructor() {

  }


}
