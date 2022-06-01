import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  imgCollection: Array<object> = [
    {
      image: "assets/pic/1.jpg",
      thumbImage: "assets/pic/1.jpg",
      alt: 'Image 1',
      title: '248000'
    }, {
      image: "assets/pic/2.jpg",
      thumbImage: "assets/pic/2.jpg",
      title: '268000',
      alt: 'Image 2'
    }, {
      image: "assets/pic/3.jpg",
      thumbImage: "assets/pic/3.jpg",
      title: '268000',
      alt: 'Image 3'
    }, {
      image: "assets/pic/4.jpg",
      thumbImage: "assets/pic/4.jpg",
      title: '268000',
      alt: 'Image 4'
    }, {
      image: "assets/pic/5.jpg",
      thumbImage: "assets/pic/5.jpg",
      title: '268000',
      alt: 'Image 5'
    }, {
      image: "assets/pic/6.jpg",
      thumbImage:"assets/pic/6.jpg",
      title: '268000',
      alt: 'Image 6'
    },{
      image: "assets/pic/7.jpg",
      thumbImage: "assets/pic/7.jpg",
      title: '268000',
      alt: 'Image 6'
    },{
      image: "assets/pic/8.jpg",
      thumbImage: "assets/pic/8.jpg",
      title: '268000',
      alt: 'Image 6'
    },{
      image: "assets/pic/9.jpg",
      thumbImage: "assets/pic/9.jpg",
      title: 'Image 6',
      alt: 'Image 6'
    },{
      image: "assets/pic/10.jpg",
      thumbImage: "assets/pic/10.jpg",
      title: 'Image 6',
      alt: 'Image 6'
    },{
      image: "assets/pic/11.jpg",
      thumbImage: "assets/pic/11.jpg",
      title: 'Image 6',
      alt: 'Image 6'
    },{
      image: "assets/pic/12.jpg",
      thumbImage:"assets/pic/12.jpg",
      title: 'Image 6',
      alt: 'Image 6'
    },{
      image: "assets/pic/13.jpg",
      thumbImage: "assets/pic/13.jpg",
      title: 'Image 6',
      alt: 'Image 6'
    }
];


  constructor() { }

  ngOnInit(): void {
  }

}
