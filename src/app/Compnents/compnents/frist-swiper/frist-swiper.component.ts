import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-frist-swiper',
  templateUrl: './frist-swiper.component.html',
  styleUrls: ['./frist-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FristSwiperComponent {
  images: any[] = [];
  constructor() {
    this.images = [
      {
        category: 'fashion',
        src: './../../../assets/carousel2/1.png',
      },
      {
        category: 'summer',
        src: './../../../assets/carousel2/2.png',
      },
      {
        category: 'beauty',
        src: './../../../assets/carousel2/3.png',
      },
      {
        category: 'clearance',
        src: './../../../assets/carousel2/5.png',
      },
      {
        category: 'beauty',
        src: './../../../assets/carousel2/6.png',
      },
      {
        category: 'home',
        src: './../../../assets/carousel2/7.png',
      },
      {
        category: 'fashion',
        src: './../../../assets/carousel2/8.png',
      },
      {
        category: 'fashion',
        src: './../../../assets/carousel2/9.png',
      },
      {
        category: 'mobiles',
        src: './../../../assets/carousel2/10.png',
      },
      {
        category: 'wearables',
        src: './../../../assets/carousel2/11.png',
      },
      {
        category: 'fragrances',
        src: './../../../assets/carousel2/12.png',
      },
      {
        category: 'TVs',
        src: './../../../assets/carousel2/13.png',
      },
      {
        category: 'electronics',
        src: './../../../assets/carousel2/14.png',
      },
      {
        category: 'grocery',
        src: './../../../assets/carousel2/15.png',
      },
      {
        category: 'health',
        src: './../../../assets/carousel2/16.png',
      },
      {
        category: 'headphones',
        src: './../../../assets/carousel2/17.png',
      },
      {
        category: 'laptops',
        src: './../../../assets/carousel2/18.png',
      },
      {
        category: 'sports',
        src: './../../../assets/carousel2/19.png',
      },
      {
        category: 'fragrances',
        src: './../../../assets/carousel2/20.png',
      },
      {
        category: 'appliances',
        src: './../../../assets/carousel2/21.png',
      },
    ];
  }
}
