import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { TagsService } from '../tags.service';
import { ModalService } from '../_modal';


@Component({
  selector: 'app-detailcloth',
  templateUrl: './detailcloth.component.html',
  styleUrls: ['./detailcloth.component.css']
})

export class DetailclothComponent implements OnInit {
  id: number = 0;
  select: any;
  tagsClothes: any;
  currentIndex: number = 0
  selectedImg: any;
  modal: any
  selectedSize: string = ''
  cart: Array<item> = [{ size: '', title: 0 }]
  constructor(private route: ActivatedRoute, private svc: ConnectorService, svt: TagsService, modalService: ModalService) {
    this.modal = modalService
    this.tagsClothes = svt.tags

  }

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId) {

      this.id = parseInt(stringId);

      this.svc.clothes.forEach((element: any) => {
        if (element.id === this.id) {
          this.select = element;
          this.selectedImg = this.select.images[0]
        }
      });


    } else {
      console.log('no id on url')
    }




  }
  showImg(i: number) {
    this.selectedImg = this.select.images[i]
    this.currentIndex = i


  }
  getTagTitle(i: number) {
    return this.tagsClothes[i].title;
  }
  openModal(id: string) {
    this.modal.open(id);

  }
  addShopingCart(): void {


    this.cart[0].size = this.selectedSize;
    this.cart[0].title=this.select.title
    console.log(this.cart)
  }
  onChange(value: string) {
    this.selectedSize = value;
    console.log(this.selectedSize)

  }
}
export class item {
  size: string;
  title: number;
  constructor(_size: string, _title: number) {
    this.size = _size;
    this.title = _title;
  }
}

