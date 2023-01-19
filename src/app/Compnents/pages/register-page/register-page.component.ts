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
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  insertedUser: IUser = {} as IUser;
  newSellerCode: number = 0;
  registerForm: FormGroup;
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

    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', Validators.required],
      userType: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  get fullName() {
    return this.registerForm.get('fullName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get mobile() {
    return this.registerForm.get('mobile');
  }
  get address() {
    return this.registerForm.get('address');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get rePassword() {
    return this.registerForm.get('rePassword');
  }
  get userType() {
    return this.registerForm.get('userType');
  }
  get image() {
    return this.registerForm.get('image');
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
  registration() {
    this.insertedUser = this.registerForm.value;
    const userExisit = this.myUsers.some(
      (user: any) => user.email === this.insertedUser.email
    );

    if (userExisit) {
      alert('tis email registerd before');
      var confirmation = confirm('Do you really want to go to Login page?');
      if (confirmation) {
        this.router.navigate(['/login']);
      }
    } else {
      for (let i = 1; i < 100; i++) {
        if (!this.myUsers.some((user: any) => user.sellerCode === i)) {
          this.newSellerCode = i;
          break;
        }
      }
      this.insertedUser = {
        ...this.insertedUser,
        sellerCode: this.newSellerCode,
      };
      console.log(this.insertedUser);
      this.fireStore.addUser(this.insertedUser);
      console.log(this.myUsers);

      if (this.insertedUser.userType == 'seller') {
        console.log('You are seller');
        localStorage.setItem('sellerCode', this.newSellerCode.toString());
        localStorage.setItem('email', this.insertedUser.email);
        this.router.navigate(['/Home']);
      } else {
        console.log('You are buyer');
        localStorage.setItem('email', this.insertedUser.email);
        this.router.navigate(['/Home']);
      }
    }
  }
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
