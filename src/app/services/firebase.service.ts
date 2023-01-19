import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Iproduct } from '../Models/iproduct';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private store: AngularFirestore) {}

  getproducts() {
    return this.store.collection('Products').snapshotChanges();
  }

  getUsers() {
    return this.store.collection('users').snapshotChanges();
  }

  addproduct(product: any) {
    this.store.collection('Products').add(product);
  }
  addproductToPending(product: any) {
    this.store.collection('PendingProducts').add(product);
  }

  addUser(user: any) {
    this.store.collection('users').add(user);
  }

  deleteproduct(pId: string) {
    this.store.collection('Products').doc(pId).delete();
  }

  deleteUser(uId: string) {
    this.store.collection('users').doc(uId).delete();
  }

  updateproduct(pId: string, product: Iproduct) {
    this.store.collection('Products').doc(pId).update(product);
  }

  updateUser(uId: string, user: IUser) {
    this.store.collection('users').doc(uId).update(user);
  }

  getProductById(pId: string) {
    return this.store.collection('Products').doc(pId).snapshotChanges();
  }

  getUserById(uId: string) {
    return this.store.collection('users').doc(uId).snapshotChanges();
  }
}
