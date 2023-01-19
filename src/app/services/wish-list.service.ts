import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { IwishList } from '../Models/iwish-list-';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _api: HttpClient) {}
  getWishListItems(): Observable<IwishList[]> {
    return this._api.get<IwishList[]>(`${environment.firebaseConfig}` + `/api/Wishlist/GetAll`);
  }

  // Add to cart
  addToWishList(proId: number) {
    return this._api.post(`${environment.firebaseConfig}` + `/api/Wishlist/Add?proId=${proId}`, null);
  }

  //Remove from cart
  removeFromWishList(proId: number) {
    return this._api.delete(`${environment.firebaseConfig}` + `/api/Wishlist/Remove?proId=${proId}`);
  }
}
