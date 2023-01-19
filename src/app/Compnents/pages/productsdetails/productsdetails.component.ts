import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NoonProducts } from 'src/app/Models/noon-products';
import { ICartProduct } from 'src/app/Models/icart-product';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { WishListService } from 'src/app/services/wish-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})
export class ProductsdetailsComponent implements OnInit {


  selectedProduct!: Iproduct;
  ProductQuantity: number = 1;
  p!: Iproduct;
  LocalStorageProducts: ICartProduct[] = [];

  CartProduct: ICartProduct = {
    quantity: 0,
    product: this.p,
  };



  constructor(private AllProducts: ProductsService,
    private router:Router, private ActiveRouter:ActivatedRoute,
    private _router: Router,
    private wishService: WishListService,
    private _cartService: CartService,
    private fireStore: FirebaseService,
    private cartService:CartService) { }

//   quantity:number=1;
// i=1
// plus(){
//   if(this.i!=5){
//     this.i ++;
//     this.quantity=this.i;
// }

// negative(){
//   if(this.i!=1){
//     this.i--;
//     this.quantity=this.i;
//   }
// }

newpro: any = {};
   myproduct: any;
   IdRecived: any;

   DecreaseFromStock(newpro:any) {
    newpro.stock --;
  }





  //  ArrayOfProducts: any[] = [
    // {
    //   id:'mariam',
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   id:'nouran',
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
  // ];


  ngOnInit(): void {
    // this.AllProducts.getproducts().subscribe((ArrayOfProducts) => {
    //     let prods: any = [];
    //     for(let pro of ArrayOfProducts){
    //       prods.push({id:pro.payload.doc.id,...pro.payload.doc.data()as object});
    //     }

    //     this.ArrayOfProducts = prods;
    //   }
    //   );

    scrollTo(0, 0);



  this.ActiveRouter.paramMap.subscribe(paramMap => {
    this.IdRecived = paramMap.get('productid');
    if (this.IdRecived)
    this.myproduct=
    this.fireStore.getProductById(this.IdRecived).subscribe((pro:any) => {
      this.newpro = { id: pro.payload.id, ...pro.payload.data() as object };
    })

    console.log(this.newpro);
    console.log(this.IdRecived);

    // this.newpro.forEach((a:any)=>{
    //   Object.assign(a,{quantity:1,total:a.price})
    // })


  })
  }


   addToCart(item:any){
    this.cartService.addToCart(item,this.quantity);
  }
  quantity:number = 1;
  i=1;
  plus(){
    if(this.i !=10){
      this.i ++;
      this.quantity = this.i;
    }
  }
  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity = this.i;
    }
  }
}
