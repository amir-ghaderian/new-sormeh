import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  cards = [
    "assets/pic/1.jpg", "assets/pic/2.jpg", "assets/pic/3.jpg", "assets/pic/4.jpg",
    "assets/pic/5.jpg", "assets/pic/6.jpg", "assets/pic/7.jpg", "assets/pic/8.jpg",
    "assets/pic/9.jpg", "assets/pic/10.jpg", "assets/pic/11.jpg", "assets/pic/12.jpg", "assets/pic/13.jpg"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
