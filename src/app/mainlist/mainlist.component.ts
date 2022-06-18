import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})




export class MainlistComponent implements OnInit {
  clothes:any = [
    { title: 1112, images: ["assets/pic/1.jpg", "assets/pic/11.jpg", "assets/pic/1.jpg"], tagId: [2, 4, 5] },
    { title: 1113, images: ["assets/pic/13.jpg", "assets/pic/10.jpg"], tagId: [1, 4, 7] },
    { title: 1114, images: ["assets/pic/12.jpg", "assets/pic/9.jpg"], tagId: [3, 5, 1] },
    { title: 1115, images: ["assets/pic/2.jpg", "assets/pic/8.jpg"], tagId: [1, 4, 6] },
    { title: 1116, images: ["assets/pic/3.jpg", "assets/pic/7.jpg"], tagId: [2, 3, 6] },
    { title: 1117, images: ["assets/pic/4.jpg", "assets/pic/6.jpg"], tagId: [1, 7, 4] },
    { title: 1118, images: ["assets/pic/5.jpg", "assets/pic/5.jpg"], tagId: [3] },
    { title: 1119, images: ["assets/pic/6.jpg", "assets/pic/4.jpg"], tagId: [2, 1, 3, 5, 6, 7] },
    { title: 1120, images: ["assets/pic/7.jpg", "assets/pic/3.jpg"], tagId: [4, 3] },
    { title: 1121, images: ["assets/pic/8.jpg", "assets/pic/2.jpg"], tagId: [1, 2, 3, 4, 5, 6, 7] },
    { title: 1122, images: ["assets/pic/9.jpg", "assets/pic/1.jpg"], tagId: [2, 5] },
    { title: 1123, images: ["assets/pic/11.jpg", "assets/pic/1.jpg"], tagId: [4, 5] }
  ]
  tags:any = [
    { id: 1, title: "بدون چروک" },
    { id: 2, title: "جلوبسته" },
    { id: 3, title: "ابایی" },
    { id: 4, title: "زیپی" },
    { id: 5, title: "بدون دکمه" },
    { id: 6, title: " بدون رنگ دهی" },
    { id: 7, title: " جیبدار" },
  ];
  tagIdClothes=""
  detailPic: any = "";
  detailTitle: any = "";
  currentImge: string[] = [];
  currentIndex: number[] = [];

  constructor(private modalService: ModalService) {
    for (var i = 0; i < this.clothes.length; i++) {
      this.currentImge.push(this.clothes[i].images[0])
      this.currentIndex.push(0)
      
    }



  }

  ngOnInit(): void {
  }
  showingImg(id: number, clothesNum: number) {
    this.currentImge[clothesNum] = this.clothes[clothesNum].images[id];
    this.currentIndex[clothesNum] = id;
  }
  showDetail(srcPic: any, titlePic: any, id: number) {
    this.tagIdClothes="";
    this.detailPic = srcPic;
    this.detailTitle = titlePic;
   this.tagIdClothes=this.clothes[id].tagId
    console.log(this.tagIdClothes)
    ///this.tags=this.clothes[id].tags;
  }
  openModal(id: string) {

    console.log(this.detailPic)
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
