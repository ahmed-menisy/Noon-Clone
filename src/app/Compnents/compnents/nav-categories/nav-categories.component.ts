import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss'],
})
export class NavCategoriesComponent implements OnInit {
  Categorey: string = 'Electronics';
  isSeller: boolean;
  type: any;
  cats: string[] = [];
  brands: string[] = [];
  show: boolean = true;
  menu: boolean = true;
  brandsImg: string[] = []

  mobilesImg:string[]=[
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
    "https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png",
  ]
  electronicsImg: string[] = [
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
  ];

  ElectronicsCat: string[] = [
    'laptops',
    'lighting',
    'Accessories',
    'Audio & Home Entertainment',
    'Video Games',
    'Cameras & Accessories',
    'Printers & Accessories',
    'Networking Products',
    'Data Storage',
    'Computer Components',
    'Computer Accessories',
  ];
  ElectronicsBrand: string[] = [
    'Samsung',
    'LG',
    'Sony',
    'Lenovo',
    'Dell',
    'HP',
    'Apple',
    'Canon',
    'Cager',
  ];

  MobilesCat: string[] = [
   " Mobile New Arrivals",
"All Mobile Phones",
"All Tablets",
"Smartwatches & Accessories",
"Wireless Earphones",
"Earphones",
"Power Banks",
"Chargers & Cables",
"Selfie Sticks & Holders",
"Covers & Screen protectors",
"Mobile Gaming & VR Gadgets",
"Micro SD Cards",
  ]
  MobilesBrand: string[] = [
"Samsung",
"Xiaomi",
"Apple",
"Huawei",
"Oppo",
"nokia",
"Honor",
"realme",
"infinix"
  ]

  constructor() {
    this.type = localStorage.getItem('sellerCode')?.toString() || 0;
    console.log(this.type);
    if (this.type > 0) {
      this.isSeller = true;
    } else {
      this.isSeller = false;
    }
  }

  ngOnInit(): void {
    console.log(window.innerWidth);
  }

  showfun(): void {
    this.show = false;
  }

  hidefun(): void {
    this.show = true;
  }

  changeCat(e: any): void {
    switch (e.target.innerText) {
      case 'Electronics': {
        this.cats = this.ElectronicsCat;
        this.brands = this.ElectronicsBrand;
        this.Categorey = e.target.innerText;
        break;
      }
      case 'Mobiles': {
        this.cats = this.MobilesCat;
        this.brands = this.MobilesBrand;
        this.Categorey = e.target.innerText;
        break;
      }

      default: {
        this.cats = this.ElectronicsCat;
        this.brands = this.ElectronicsBrand;
        this.Categorey = e.target.innerText;
        break;
      }
    }
  }

  showmenu(e: any): void {
    this.menu = false;
    switch (e.target.innerText) {
      case 'ELECTRONICS': {
        this.cats = this.ElectronicsCat;
        this.brandsImg = this.electronicsImg;
        this.Categorey = e.target.innerText;
        break;
      }
      case 'MOBILES': {
        this.cats = this.MobilesCat;
        this.brandsImg = this.mobilesImg;
        this.Categorey = e.target.innerText;
        break;
      }

      default: {
         this.cats = this.ElectronicsCat;
         this.brandsImg = this.electronicsImg;
         this.Categorey = e.target.innerText;

      }
    }
  }

  hidemenu(): void {
    this.menu = true;
  }


  goTo(cat:any) {

  
  }
}
