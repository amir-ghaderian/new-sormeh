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
  connector: any;
  tagsCloth: Array<Tag>;
  selectedTags: Array<number> = [];
  output: Array<number> | undefined
  item: any
  constructor(private modalService: ModalService, svc: ConnectorService, svt: TagsService) {
    this.connector = svc.clothes;
    this.tagsCloth = svt.tags;

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
  
    const model = this.connector.filter((item:any) => {
      return item.connector.tagId === item.selectedTags;

    })
    console.log(model);
    ////nothing
  }

}
