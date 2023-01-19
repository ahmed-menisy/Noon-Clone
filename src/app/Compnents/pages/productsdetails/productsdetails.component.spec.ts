import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdetailsComponent } from './productsdetails.component';

describe('ProductsdetailsComponent', () => {
  let component: ProductsdetailsComponent;
  let fixture: ComponentFixture<ProductsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
