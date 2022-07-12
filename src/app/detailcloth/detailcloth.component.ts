import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { MainlistComponent } from '../mainlist/mainlist.component';
import { TagsService } from '../tags.service';
@Component({
  selector: 'app-detailcloth',
  templateUrl: './detailcloth.component.html',
  styleUrls: ['./detailcloth.component.css']
})

export class DetailclothComponent implements OnInit {
  id: any = '';
  connector: any;
  selectedImg: any;
  selectedIndex: any;
  tagIdClothes: [] = []
  tagsClothes: any;
  targetClothes:any
  
  constructor(private route: ActivatedRoute, svc: ConnectorService, svt: TagsService, sml:MainlistComponent) {
    this.connector = sml.filterList;
    this.selectedImg = sml.currentImge;
    this.selectedIndex = sml.currentIndex
    this.tagsClothes = svt.tags;


  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.tagIdClothes = this.connector[this.id].tagId;
    console.log(this.connector[this.id])

   

  }
  showImg(i: number) {
    this.selectedImg[this.id] = this.connector[this.id].images[i]


    this.selectedIndex[this.id] = i;


  }
   getTagTitle(id: number) {
     return this.tagsClothes[id].title;
   }
}
