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
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit, OnChanges {
  user: any = {};
  updatedUser: IUser = {} as IUser;
  uEmail: any;
  Foundeduser: any = [];
  usrFormGroup: FormGroup;
  emailPattern: string = '[a-zA-Z0-9+_.-]+@gmail.com';
  myPassword: any;
  show: string = 'password';
  eye: string = 'fa fa-eye-slash';

  linkPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{10,256}/;
  constructor(
    private fireStore: FirebaseService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.uEmail = localStorage.getItem('email');
    this.fireStore.getUsers().subscribe((users) => {
      let myusers: any = [];
      for (let user of users) {
        myusers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
      this.user = myusers.find((u: any) => u.email == this.uEmail);
      console.log(this.user);
      this.usrFormGroup.patchValue(this.user);
    });

    this.usrFormGroup = this.fb.group({
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
    return this.usrFormGroup.controls;
  }
  get fullName() {
    return this.usrFormGroup.get('fullName');
  }
  get email() {
    return this.usrFormGroup.get('email');
  }
  get mobile() {
    return this.usrFormGroup.get('mobile');
  }
  get address() {
    return this.usrFormGroup.get('address');
  }

  get password() {
    return this.usrFormGroup.get('password');
  }
  get rePassword() {
    return this.usrFormGroup.get('rePassword');
  }
  get userType() {
    return this.usrFormGroup.get('userType');
  }
  get image() {
    return this.usrFormGroup.get('image');
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
  updateUser() {
    this.updatedUser = this.usrFormGroup.value;
    console.log(this.updatedUser);

    this.fireStore.updateUser(this.uEmail, this.updatedUser);

    alert(`${this.user.fullName} is updated`);

    this.router.navigate(['/userProfile']);
  }
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
