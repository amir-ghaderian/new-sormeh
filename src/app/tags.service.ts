import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  tags: Array<Tag> = [
    { id: 0, title: "بدون چروک" },
    { id: 1, title: "جلوبسته" },
    { id: 2, title: "ابایی" },
    { id: 3, title: "زیپی" },
    { id: 4, title: "بدون دکمه" },
    { id: 5, title: " بدون رنگ دهی" },
    { id: 6, title: " جیبدار" },
  ];

  public getTagTitle(tagId: number): string {

    const target = this.tags.find(t => t.id === tagId);

    if(target) {
      return target.title
    }
    return '-';
  }
  
 
}

 export class Tag {
  id: number;
  title: string;


  constructor(_id: number, _title: string) {
    this.id = _id;
    this.title = _title;
  }
}
