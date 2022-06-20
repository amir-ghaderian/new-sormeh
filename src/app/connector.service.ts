import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
printToConsole(arg: string){
  console.log(arg)
}

  public clothes = [
    { title: 1112, images: ["assets/pic/1.jpg", "assets/pic/11.jpg", "assets/pic/1.jpg"], tagId: [2, 4, 5] },
    { title: 1113, images: ["assets/pic/13.jpg", "assets/pic/10.jpg"], tagId: [1, 4,0] },
    { title: 1114, images: ["assets/pic/12.jpg", "assets/pic/9.jpg"], tagId: [3, 5, 1] },
    { title: 1115, images: ["assets/pic/2.jpg", "assets/pic/8.jpg"], tagId: [1, 4, 6] },
    { title: 1116, images: ["assets/pic/3.jpg", "assets/pic/7.jpg"], tagId: [2, 3, 6] },
    { title: 1117, images: ["assets/pic/4.jpg", "assets/pic/6.jpg"], tagId: [1, 0, 4] },
    { title: 1118, images: ["assets/pic/5.jpg", "assets/pic/5.jpg"], tagId: [3,0] },
    { title: 1119, images: ["assets/pic/6.jpg", "assets/pic/4.jpg"], tagId: [2, 1, 3, 5, 6] },
    { title: 1120, images: ["assets/pic/7.jpg", "assets/pic/3.jpg"], tagId: [4, 3] },
    { title: 1121, images: ["assets/pic/8.jpg", "assets/pic/2.jpg"], tagId: [1, 2, 3, 4, 5, 6] },
    { title: 1122, images: ["assets/pic/9.jpg", "assets/pic/1.jpg"], tagId: [2, 5] },
    { title: 1123, images: ["assets/pic/11.jpg", "assets/pic/1.jpg"], tagId: [4, 5] }
  ]


}
