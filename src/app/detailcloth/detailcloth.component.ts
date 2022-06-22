import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
@Component({
  selector: 'app-detailcloth',
  templateUrl: './detailcloth.component.html',
  styleUrls: ['./detailcloth.component.css']
})
 
export class DetailclothComponent implements OnInit {
id:any='';
connector:any;

  constructor(private route :ActivatedRoute ,svc:ConnectorService) { 
    this.connector=svc.clothes;
    
    console.log(this.connector[0].title)
  } 

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
  }
  
}
