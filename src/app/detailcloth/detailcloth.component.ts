import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { TagsService } from '../tags.service';
@Component({
  selector: 'app-detailcloth',
  templateUrl: './detailcloth.component.html',
  styleUrls: ['./detailcloth.component.css']
})

export class DetailclothComponent implements OnInit {
  id: number = 0;
  select: any; 
  tagsClothes: any;
 
  
  constructor(private route: ActivatedRoute,private svc: ConnectorService, svt: TagsService) {
    
this.tagsClothes=svt.tags

  }

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId) {

      this.id = parseInt( stringId );
      console.log(this.id);
      this.svc.clothes.forEach((element: any) => {
        if (element.id === this.id) {
          this.select=element;
        }
      });
      
      
    } else {
      console.log('no id on url')
    }
    

   

  }
  showImg(i: number) {
   /// this.selectedImg[this.id] = this.connector[this.id].images[i]


    ////this.selectedIndex[this.id] = i;


  }
   getTagTitle(i: number) {
     return this.tagsClothes[i].title;
   }
}
