import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  product: any = {

    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
  discountPercentage: 12.96,
   sellerCode:3,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]

}
  bestSeller: any[] = []
  allProducts:any[]=[]



  constructor(private fireStore: FirebaseService,private _ProductsService:ProductsService,public translate: TranslateService) {


  }


  ngOnInit(): void {



  }
  ngAfterContentChecked(): void {
    this.allProducts = this._ProductsService.getProductsByCategorey("all");
    this.bestSeller=this.allProducts.filter((p: any) => p.rating > 4.5);

  }
   }



