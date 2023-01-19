import { Component, OnInit } from '@angular/core';
import { NoonProducts } from 'src/app/Models/noon-products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {

  ArrayOfProducts: any[] = [];
  products: any[] = [];
  productName: any;
  termSec: string = ""
  constructor(private AllProducts: ProductsService, private router: Router, private fireStore: FirebaseService, private ActiveRouter: ActivatedRoute,public translate: TranslateService) {

  }
  // term:BehaviorSubject<any> = new BehaviorSubject('')

  ShowProductDetails(productid: any): void {
    this.router.navigate(['productsdetails', productid]);
  }





  //     {
  //       id:'mariam',
  //     brand:'Cuff Butterfly',
  //     category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},
  // {
  //   id:'nouran',
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},
  // {
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'}
  // ];


  getValue(e: any) {

    this.ArrayOfProducts = this.AllProducts.getProductsByCategorey("all")
    this.termSec = e.target.getAttribute('data-name');

    // console.log(this.term.getValue());

  }

  ngOnInit(): void {

    console.log(this.ArrayOfProducts);

    // this.fireStore.getproducts().subscribe((ArrayOfProducts) => {
    //   let prods: any = [];
    //   for (let pro of ArrayOfProducts) {
    //     prods.push({
    //       id: pro.payload.doc.id,
    //       ...(pro.payload.doc.data() as object),

    //     });
    //   }
    //   console.log("hii from firestore");

    //   this.products = prods;
    // });


    this.ActiveRouter.paramMap.subscribe(paramMap => {

      this.productName = paramMap.get('productName');
      let cat=paramMap.get('productCat');
      if (this.productName) {
        this.termSec = "";
       console.log("hii from params");
        this.ArrayOfProducts = this.AllProducts.getProductsByName(this.productName);
        console.log(this.ArrayOfProducts);
      }
      else if (cat)
      {
        this.termSec = "";
        console.log("hii from params");
         this.ArrayOfProducts = this.AllProducts.getProductsByCategorey(cat);
         console.log(this.ArrayOfProducts);

        }
      else {

        this.ArrayOfProducts = this.AllProducts.getProductsByCategorey("all")
        console.log(this.ArrayOfProducts);

      }

    })

    //     this.term.subscribe({
    //       next:()=> {
    // this.termSec = this.term.getValue()
    //       }
    //     })


  }
}
