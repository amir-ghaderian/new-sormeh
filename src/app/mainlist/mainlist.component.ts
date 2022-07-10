import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
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
  tagsCloth: Array<Tag>;
  selectedTags: Array<number> = [];
  filtered: number[] = []
  show = false;
  filterList: any
  constructor(private modalService: ModalService, svc: ConnectorService, svt: TagsService) {
    this.product = svc.clothes;
    this.tagsCloth = svt.tags;
    for (var i = 0; i < this.product.length; i++) {
      this.currentImge.push(this.product[i].images[0])
      this.currentIndex.push(0)
    }
    this.filterList = this.product

  }

  ngOnInit(): void {
  }
  showingImg(id: number, clothesNum: number) {
    this.currentImge[clothesNum] = this.product[clothesNum].images[id];
    this.currentIndex[clothesNum] = id;
  }


  tagClick(id: number) {
    if (this.selectedTags.indexOf(id) === -1) {
      this.selectedTags.push(id)
    } else {
      let location = this.selectedTags.lastIndexOf(id);
      this.selectedTags.splice(location, 1)
    }
    return this.selectedTags
  }



  setFilter() {
    this.filterList = this.product
    this.filtered = []
    for (var i = 0; i < this.selectedTags.length; i++) {
      for (var j = 0; j < this.filterList.length; j++) {
        for (var c = 0; c < this.filterList[j].tagId.length; c++) {
          if (this.selectedTags[i] === this.filterList[j].tagId[c]) {
            if (this.filtered.indexOf(this.filterList[j]) === -1) {
              this.filtered.push(this.filterList[j])
            }
          }
        }
      }
      if (this.selectedTags.length === 0) {
        this.filterList = this.product
      }
      this.filterList = this.filtered
    }

  }

}
