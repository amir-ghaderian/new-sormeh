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
  filterList: any;
  constructor(private modalService: ModalService, svc: ConnectorService, svt: TagsService) {
    this.product = svc.clothes;
    this.filterList = this.product
    this.tagsCloth = svt.tags;
    for (var i = 0; i < this.filterList.length; i++) {
      this.currentImge.push(this.filterList[i].images[0])
      this.currentIndex.push(0)
    }
    

  }

  ngOnInit(): void {
  }
  showingImg(id: number, clothesNum: number) {
    this.filterList[clothesNum].images[0] =this.filterList[clothesNum].images[id];
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

    if( this.selectedTags.length === 0) {
      this.filterList = this.product
    } else {
      this.filterList = this.filtered;
    }

  }

}
