import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})




export class MainlistComponent implements OnInit {
  clothes = [
    { title: 1112, images: ["assets/pic/1.jpg", "assets/pic/11.jpg", "assets/pic/1.jpg"] },
    { title: 1113, images: ["assets/pic/13.jpg", "assets/pic/10.jpg"] },
    { title: 1114, images: ["assets/pic/12.jpg", "assets/pic/9.jpg"] },
    { title: 1115, images: ["assets/pic/2.jpg", "assets/pic/8.jpg"] },
    { title: 1116, images: ["assets/pic/3.jpg", "assets/pic/7.jpg"] },
    { title: 1117, images: ["assets/pic/4.jpg", "assets/pic/6.jpg"] },
    { title: 1118, images: ["assets/pic/5.jpg", "assets/pic/5.jpg"] },
    { title: 1119, images: ["assets/pic/6.jpg", "assets/pic/4.jpg"] },
    { title: 1120, images: ["assets/pic/7.jpg", "assets/pic/3.jpg"] },
    { title: 1121, images: ["assets/pic/8.jpg", "assets/pic/2.jpg"] },
    { title: 1122, images: ["assets/pic/9.jpg", "assets/pic/1.jpg"] },
    { title: 1123, images: ["assets/pic/11.jpg", "assets/pic/1.jpg"] }
  ]
  detailPic:any="";
  detailTitle:any="";
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
  showDetail(srcPic: any,titlePic:any) {
    this.detailPic= srcPic;
    this.detailTitle=titlePic;
  }
  openModal(id: string) {
    
    console.log(this.detailPic)
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
