import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/Models/iuser';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [];
  user: any = {};
  isLoggedSubject:BehaviorSubject<boolean>;

  constructor(private fireStore: FirebaseService) {
     this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged)

    
    this.fireStore.getUsers().subscribe((users) => {
      let myusers: any = [];
      for (let user of users) {
        myusers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
      this.users = myusers;
    });
  }


  get isUserLogged():boolean {
    return (localStorage.getItem("email"))?true:false;
  }


  loggedStatus():Observable<boolean> {
    return this.isLoggedSubject;
  }




}
