import { IUser } from 'src/app/Models/iuser';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';

import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  insertedUser: IUser = {} as IUser;
  loginForm: FormGroup;
  emailPattern: string = '[a-zA-Z0-9+_.-]+@gmail.com';
  show: string = 'password';
  eye: string = 'fa fa-eye-slash';
  myUsers: any = [];
  linkPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{10,256}/;
  constructor(
    private fireStore: FirebaseService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.fireStore.getUsers().subscribe((users) => {
      for (let user of users) {
        this.myUsers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  toggle() {
    if (this.show == 'text') {
      this.show = 'password';
      this.eye = 'fa fa-eye-slash';
    } else {
      this.show = 'text';
      this.eye = 'fa fa-eye';
    }
  }
  login() {
    this.insertedUser = this.loginForm.value;
    const userExisit = this.myUsers.some(
      (user: any) => user.email === this.insertedUser.email
    );

    if (userExisit) {
      var foundeduser = this.myUsers.find(
        (user: any) => user.email === this.insertedUser.email
      );
      console.log(foundeduser);
      if (foundeduser.password === this.insertedUser.password) {
        if (foundeduser.userType == 'seller') {
          console.log('You are seller');
          localStorage.setItem('sellerCode', foundeduser.sellerCode.toString());
          localStorage.setItem('email', foundeduser.email);
          ///fady
          this.userService.isLoggedSubject.next(true);

          this.router.navigate(['/Home']);
        } else {
          console.log('You are buyer');
          localStorage.setItem('email', foundeduser.email);
          this.userService.isLoggedSubject.next(true);
          this.router.navigate(['/Home']);
        }
      } else {
        alert('Please enter valid password or email');
      }
    } else {
      alert("this email didn't registerd before");
      var confirmation = confirm('Do you really want to go to Register page?');
      if (confirmation) {
        this.router.navigate(['/register']);
      }
    }
  }
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
