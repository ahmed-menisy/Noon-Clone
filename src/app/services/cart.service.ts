import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      this.cartItemList = JSON.parse(cart);
      this.productList.next(this.cartItemList)
    }
  }
  getProduct() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any, qu: any) {
    this.cartItemList.push({ quantity: qu, ...product });
    localStorage.setItem("cart", JSON.stringify(this.cartItemList))
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(product);
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    localStorage.setItem("cart", JSON.stringify(this.cartItemList))
    this.productList.next(this.cartItemList)
  }
}
