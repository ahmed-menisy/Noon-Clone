import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import SwiperCore, { SwiperOptions } from 'swiper';
import  { Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss']
})
export class ProductsSwiperComponent implements OnInit ,OnChanges {


  @Input() products: any[] = [];
  @Input() sellerCode!: number;

  constructor(private fireStore: FirebaseService) { }

  ngOnInit(): void {


  }
  ngOnChanges(): void {



  }
  deleteProduct(pId: string) {
    if (confirm("Delete this product ?")) {
      this.fireStore.deleteproduct(pId);
    }
  }
  updateProduct(pId: string) {

  }

}
