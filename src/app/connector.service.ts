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
    { id: 45, title: "بارانی تو خز", images: [{ url: "assets/pic/14.JPG", idcolor: 15 }, { url: "assets/pic/15.JPG", idColor: 5 }, { url: "assets/pic/16.JPG", idColor: 10 }, { url: "assets/pic/17.JPG", idColor: 12 }], tagId: [2, 4, 5], size: ['1', '2'], price: 499000, colorId: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: 46, title: "کت فوتر", images: [{ url: "assets/pic/18.JPG", idColor: 1 }, { url: "assets/pic/19.JPG", idColor: 2 }, { url: "assets/pic/20.JPG", idColor: 3 }, { url: "assets/pic/21.JPG", idColor: 4 }, { url: "assets/pic/22.JPG", idColor: 5 }], tagId: [1, 4, 0], size: ['1', '2', '3', '4'], price: 468000, colorId: [9, 10, 11, 1, 8] },
    { id: 47, title: "اورکت ضد آب", images: [{ url: "assets/pic/26.JPG", idColor: 1 }, { url: "assets/pic/27.JPG", idColor: 2 }, { url: "assets/pic/25.JPG", idColor: 3 }, { url: "assets/pic/24.JPG", idColor: 4 }], tagId: [3, 5, 1], size: ['M', "L", "XL", "XXL"], price: 498000, colorId: [14, 1, 12, 11, 4, 13] },
    { id: 48, title: "مانتو مدل هلیا", images: [{ url: "assets/pic/2.jpg", idColor: 1 }, { url: "assets/pic/8.jpg", idColor: 2 }], tagId: [1, 4, 6], size: ['38', '40', '42'], price: 298000, colorId: [] },
    { id: 49, title: "مانتو مدل سرخ پوش", images: [{ url: "assets/pic/3.jpg", idColor: 1 }, { url: "assets/pic/7.jpg", idColor: 2 }], tagId: [2, 3, 6], size: ['Freesize'], price: 298000, colorId: [] },
    { id: 50, title: "مانتو مدل آیدا", images: [{ url: "assets/pic/4.jpg", idColor: 1 }, { url: "assets/pic/6.jpg", idColor: 2 }, { url: "assets/pic/5.jpg", idColor: 3 }, { url: "assets/pic/4.jpg", idColor: 4 }], tagId: [1, 0, 4], size: ["Freesize"], price: 498000, colorId: [] },
    { id: 51, title: "مانتو مدل وفا", images: [{ url: "assets/pic/5.jpg", idColor: 1 }, { url: "assets/pic/5.jpg", idColor: 2 }], tagId: [3, 0], size: ['1', '2', '3', '4'], price: 235000, colorId: [] },
    { id: 52, title: "مانتو مدل یفه سگگک", images: [{ url: "assets/pic/6.jpg", idColor: 1 }, { url: "assets/pic/4.jpg", idColor: 2 }], tagId: [2, 1, 3, 5, 6], size: ['1', '2', '3'], price: 298000, colorId: [] },
    { id: 53, title: "مانتو مدل کتی", images: [{ url: "assets/pic/7.jpg", idColor: 1 }, { url: "assets/pic/3.jpg", idColor: 2 }], tagId: [4, 3], size: ['Freesize'], price: 368000, colorId: [] },
    { id: 54, title: "مانتو مدل رامن", images: [{ url: "assets/pic/8.jpg", idColor: 1 }, { url: "assets/pic/2.jpg", idColor: 2 }], tagId: [1, 2, 3, 4, 5, 6], size: ['S', 'M', 'L', 'XL'], price: 198000, colorId: [] },
    { id: 55, title: "مانتو مدل سوسکی", images: [{ url: "assets/pic/9.jpg", idColor: 1 }, { url: "assets/pic/1.jpg", idColor: 2 }, { url: "assets/pic/5.jpg", idColor: 3 }, { url: "assets/pic/4.jpg", idColor: 4 }], tagId: [2, 5], size: ['XS', 'XM', 'S'], price: 398000, colorId: [] },
    { id: 56, title: "مانتو مدل آناهیتا", images: [{ url: "assets/pic/11.jpg", idColor: 1 }, { url: "assets/pic/1.jpg", idColor: 2 }, { url: "assets/pic/5.jpg", idColor: 3 }, { url: "assets/pic/4.jpg", idColor: 4 }], tagId: [4, 5], size: ['38', '40', '42', '44', '46'], price: 198000, colorId: [] }
  ]

  constructor() {

  }


}
