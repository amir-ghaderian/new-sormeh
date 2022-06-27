import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
import { Tag, TagsService } from '../tags.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})




export class MainlistComponent implements OnInit {
  currentImge: string[] = [];
  currentIndex: number[] = [];
  targetCloth: any = ''
  connector: any;
  tagsCloth: Array<Tag> 
  constructor(private modalService: ModalService, svc: ConnectorService, svt: TagsService) {
    this.connector = svc.clothes;
     this.tagsCloth=svt.tags;

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





  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
