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
  product: any
  modal:any
  tagsCloth: Array<Tag>;
  selectedTags: Array<number> = [];
  filtered: number[] = []
  show = false;
  filterList: any;
  constructor(public modalService: ModalService, svc: ConnectorService, svt: TagsService) {
    this.product = svc.clothes;
    this.filterList = this.product
    this.tagsCloth = svt.tags;
    this.modal = modalService;
    for (var i = 0; i < this.product. length; i++) {
      this.currentIndex.push
    }


  }

  ngOnInit(): void {
    this.renderList()
  }
  showingImg(id: number, clothesNum: number) {
    this.currentImge[clothesNum] = this.filterList[clothesNum].images[id].url;
    this.currentIndex[clothesNum] = id;

  }


  tagClick() {

  }



  setFilter(id: number) {
    if (this.selectedTags.indexOf(id) === -1) {
      this.selectedTags.push(id)
    } else {
      let location = this.selectedTags.lastIndexOf(id);
      this.selectedTags.splice(location, 1)
    }
  
    this.filtered = []
    for (var i = 0; i < this.selectedTags.length; i++) {
      let selectedTag = this.selectedTags[i];
      for (var j = 0; j < this.product.length; j++) {

        let product = this.product[j];
        for (var c = 0; c < product.tagId.length; c++) {

          if (selectedTag === product.tagId[c]) {

            if (this.filtered.indexOf(product) === -1) {
              this.filtered.push(product);
            }
          }
        }
      }
    }

    if (this.selectedTags.length === 0) {
      this.filterList = this.product
    } else {
      this.filterList = this.filtered;

      this.renderList()
    }
    this.renderList()

  }
  renderList() {
    this.currentImge = []
    this.currentIndex = []
    for (var i = 0; i < this.filterList.length; i++) {
      this.currentImge.push(this.filterList[i].images[0].url)
      this.currentIndex.push(0)
    }
  }
  previous(id: number, clothesNum: number) {
    this.currentIndex[clothesNum] -= 1;

    this.currentImge[clothesNum] = this.product[clothesNum].images[this.currentIndex[clothesNum]].url;

  }
  next(id: number, clothesNum: number) {
    this.currentIndex[clothesNum] += 1
    this.currentImge[clothesNum] = this.product[clothesNum].images[this.currentIndex[clothesNum]].url;



  }
  openModal(id: string) {
    this.modal.open(id);
  
  }
  closeModal(id: string) {
    this.modal.close(id);
  
  }
}
