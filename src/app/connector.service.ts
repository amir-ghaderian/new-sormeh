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
    { id: 45, title: "بارانی تو خز", images: [{ url: "assets/pic/14.JPG", colorId: 15 }, { url: "assets/pic/15.JPG", colorId: 5 }, { url: "assets/pic/16.JPG", colorId: 4 }, { url: "assets/pic/17.JPG", colorId: 2 }], tagId: [2, 4, 5], size: ['1', '2'], price: 499000, colorIds: [ 2, 4, 5 ,15] },
    { id: 46, title: "کت فوتر", images: [{ url: "assets/pic/18.JPG", colorId: 1 }, { url: "assets/pic/19.JPG", colorId: 2 }, { url: "assets/pic/20.JPG", colorId: 3 }, { url: "assets/pic/21.JPG", colorId: 4 }, { url: "assets/pic/22.JPG", colorId: 5 }], tagId: [1, 4, 0], size: ['1', '2', '3', '4'], price: 468000, colorIds: [9, 10, 11, 1, 8] },
    { id: 47, title: "اورکت ضد آب", images: [{ url: "assets/pic/26.JPG", colorId: 1 }, { url: "assets/pic/27.JPG", colorId: 2 }, { url: "assets/pic/25.JPG", colorId: 3 }, { url: "assets/pic/24.JPG", colorId: 4 }], tagId: [3, 5, 1], size: ['M', "L", "XL", "XXL"], price: 498000, colorIds: [14, 1, 12, 11, 4, 13] },
    { id: 48, title: "مانتو مدل هلیا", images: [{ url: "assets/pic/2.jpg", colorId: 1 }, { url: "assets/pic/8.jpg", colorId: 2 }], tagId: [1, 4, 6], size: ['38', '40', '42'], price: 298000, colorIds: [] },
    { id: 49, title: "مانتو مدل سرخ پوش", images: [{ url: "assets/pic/3.jpg", colorId: 1 }, { url: "assets/pic/7.jpg", colorId: 2 }], tagId: [2, 3, 6], size: ['Freesize'], price: 298000, colorIds: [] },
    { id: 50, title: "مانتو مدل آیدا", images: [{ url: "assets/pic/4.jpg", colorId: 1 }, { url: "assets/pic/6.jpg", colorId: 2 }, { url: "assets/pic/5.jpg", colorId: 3 }, { url: "assets/pic/4.jpg", colorId: 4 }], tagId: [1, 0, 4], size: ["Freesize"], price: 498000, colorIds: [] },
    { id: 51, title: "مانتو مدل وفا", images: [{ url: "assets/pic/5.jpg", colorId: 1 }, { url: "assets/pic/5.jpg", colorId: 2 }], tagId: [3, 0], size: ['1', '2', '3', '4'], price: 235000, colorIds: [] },
    { id: 52, title: "مانتو مدل یفه سگگک", images: [{ url: "assets/pic/6.jpg", colorId: 1 }, { url: "assets/pic/4.jpg", colorId: 2 }], tagId: [2, 1, 3, 5, 6], size: ['1', '2', '3'], price: 298000, colorIds: [] },
    { id: 53, title: "مانتو مدل کتی", images: [{ url: "assets/pic/7.jpg", colorId: 1 }, { url: "assets/pic/3.jpg", colorId: 2 }], tagId: [4, 3], size: ['Freesize'], price: 368000, colorIds: [] },
    { id: 54, title: "مانتو مدل رامن", images: [{ url: "assets/pic/8.jpg", colorId: 1 }, { url: "assets/pic/2.jpg", colorId: 2 }], tagId: [1, 2, 3, 4, 5, 6], size: ['S', 'M', 'L', 'XL'], price: 198000, colorIds: [] },
    { id: 55, title: "مانتو مدل سوسکی", images: [{ url: "assets/pic/9.jpg", colorId: 1 }, { url: "assets/pic/1.jpg", colorId: 2 }, { url: "assets/pic/5.jpg", colorId: 3 }, { url: "assets/pic/4.jpg", colorId: 4 }], tagId: [2, 5], size: ['XS', 'XM', 'S'], price: 398000, colorIds: [] },
    { id: 56, title: "مانتو مدل آناهیتا", images: [{ url: "assets/pic/11.jpg", colorId: 1 }, { url: "assets/pic/1.jpg", colorId: 2 }, { url: "assets/pic/5.jpg", colorId: 3 }, { url: "assets/pic/4.jpg", colorId: 4 }], tagId: [4, 5], size: ['38', '40', '42', '44', '46'], price: 198000, colorIds: [] }
  ]

  constructor() {

  }


}
