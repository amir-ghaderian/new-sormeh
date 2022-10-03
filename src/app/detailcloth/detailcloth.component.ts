import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { item, ShoppingCartService } from '../shopping-cart.service';
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
  selectedSize: any = []
  cart: any;
  cloths: any;
  quntity: number = 1
  show: boolean = false;
  alert: boolean = false;
  totalPriceItem: any
  constructor(private route: ActivatedRoute, private svc: ConnectorService, svt: TagsService, modalService: ModalService, scs: ShoppingCartService) {
    this.modal = modalService
    this.tagsClothes = svt.tags
    this.cart = scs.cart;
    this.cloths = svc.clothes;
  }

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId) {

      this.id = parseInt(stringId);

      this.svc.clothes.forEach((element: any) => {
        if (element.id === this.id) {
          this.select = element;
          this.selectedImg = this.select.images[0];
          this.totalPriceItem = this.quntity * this.select.price;

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
  closeModal(id: string) {
    this.modal.close(id);

  }
  addShopingCart() {

    if (this.show === false) {
      this.alert = false;
      document.getElementById("ss")?.classList.add("bg-red-500");
    } else {
      this.totalPriceItem = this.quntity * this.select.price;

      let customObj = new item(this.selectedSize, this.select.id, this.select.title, this.selectedImg, this.select.price, this.quntity, this.totalPriceItem)
      this.cart.push(customObj);
      this.closeModal('custom-modal-1')
    }
  }
  onChange(value: string) {
    this.show = true
    this.selectedSize = value;


  }
  addOne() {

    this.quntity += 1;


  }
  giveOne() {
    this.quntity -= 1;

  }


}


