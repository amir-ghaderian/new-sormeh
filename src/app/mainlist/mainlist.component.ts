import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})




export class MainlistComponent implements OnInit {
  
 
  
  detailPic: any = "";
  detailTitle: any = "";
  currentImge: string[] = [];
  currentIndex: number[] = [];
  targetCloth:any=''
  connector:any
  constructor(private modalService: ModalService ,svc:ConnectorService) {
    this.connector=svc.clothes;
    for (var i = 0; i < this.connector.length; i++) {
      this.currentImge.push(this.connector[i].images[0])
      this.currentIndex.push(0)

    }
   


  }

  ngOnInit(): void {
  }
  showingImg(id: number, clothesNum: number) {
    this.currentImge[clothesNum] = this.connector[clothesNum].images[id];
    this.currentIndex[clothesNum] = id;
  }

  showDetail( id: number) {

    this.detailPic = this.currentImge[id];
    this.detailTitle = this.connector[id].title;
   /// this.tagIdClothes = this.connector[id].tagId;
    this.targetCloth = this.connector[id];
    
   
  }

  

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
