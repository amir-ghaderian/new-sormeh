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
  constructor(private route: ActivatedRoute, svc: ConnectorService) {
    this.connector = svc.clothes;
    this.selectedImg = svc.currentImge;
    this.selectedIndex = svc.currentIndex

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

  }
  showImg(i: number) {
    this.selectedImg[this.id] = this.connector[this.id].images[i]
    this.selectedIndex[this.id] = i;

  }
}
