import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailclothComponent } from './detailcloth.component';

describe('DetailclothComponent', () => {
  let component: DetailclothComponent;
  let fixture: ComponentFixture<DetailclothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailclothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailclothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
