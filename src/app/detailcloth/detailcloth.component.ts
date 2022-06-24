import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
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
  tagIdClothes:[]=[]
  tags: any = [
    { id: 0, title: "بدون چروک" },
    { id: 1, title: "جلوبسته" },
    { id: 2, title: "ابایی" },
    { id: 3, title: "زیپی" },
    { id: 4, title: "بدون دکمه" },
    { id: 5, title: " بدون رنگ دهی" },
    { id: 6, title: " جیبدار" },
  ];
  constructor(private route: ActivatedRoute, svc: ConnectorService) {
    this.connector = svc.clothes;
    this.selectedImg = svc.currentImge;
    this.selectedIndex = svc.currentIndex

   

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.tagIdClothes=this.connector[this.id].tagId;

  }
  showImg(i: number) {
    this.selectedImg[this.id] = this.connector[this.id].images[i]
  
    
    this.selectedIndex[this.id] = i;
    

  }
  getTagTitle(id: number) {
    return this.tags[id].title;
  }
}
