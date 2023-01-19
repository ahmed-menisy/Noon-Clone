import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSwiperComponent } from './products-swiper.component';

describe('ProductsSwiperComponent', () => {
  let component: ProductsSwiperComponent;
  let fixture: ComponentFixture<ProductsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
