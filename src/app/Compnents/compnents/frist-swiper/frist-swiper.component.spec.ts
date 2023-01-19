import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristSwiperComponent } from './frist-swiper.component';

describe('FristSwiperComponent', () => {
  let component: FristSwiperComponent;
  let fixture: ComponentFixture<FristSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FristSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FristSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
