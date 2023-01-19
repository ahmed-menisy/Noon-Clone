import { Iproduct } from '../../../Models/iproduct';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnChanges {
  pId: string = '';

  @Input() product!: any;
  @Input() sellerCode!:any;

  @Input() update: boolean = false;
  linkPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{10,256}/;
  stringPattern = /^[A-Za-z]+[A-Za-z0-9@:%._\+~#= ]+$/;
  usrFormGroup: FormGroup;
  myPassword: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fireStore: FirebaseService
  ) {
    this.usrFormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      images: this.fb.array([fb.control('', Validators.required)]),
      stock: ['', [Validators.required, Validators.min(1)]],
      brand: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
      price: ['', [Validators.required, Validators.min(1)]],
      discountPercentage: [
        '',
        [Validators.required, Validators.min(1), Validators.max(60)],
      ],
      thumbnail: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  get title() {
    return this.usrFormGroup.get('title');
  }
  get description() {
    return this.usrFormGroup.get('description');
  }
  get images() {
    var imgArray = this.usrFormGroup.get('images') as FormArray;
    return imgArray;
  }

  get stock() {
    return this.usrFormGroup.get('stock');
  }
  get rating() {
    return this.usrFormGroup.get('rating');
  }
  get price() {
    return this.usrFormGroup.get('price');
  }

  get discountPercentage() {
    return this.usrFormGroup.get('discountPercentage');
  }
  get brand() {
    return this.usrFormGroup.get('brand');
  }
  get thumbnail() {
    return this.usrFormGroup.get('thumbnail');
  }
  get category() {
    return this.usrFormGroup.get('category');
  }

  addImage() {
    this.images.push(this.fb.control('', Validators.required));
  }
  removeImg() {
    this.images.removeAt(-1);
  }

  addProduct(e: Event) {
    if (this.update) {
      this.product = { sellerCode:this.sellerCode,...this.usrFormGroup.value };
      this.fireStore.updateproduct(this.pId, this.product);
      alert(`${this.product.title} is updated`);

      this.router.navigate(['/Profile']);
    } else {
      this.product = {sellerCode:this.sellerCode,...this.usrFormGroup.value };
      this.fireStore.addproductToPending(this.product);
      alert(`${this.product.title} is added`);
      this.usrFormGroup.reset();
    }
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.product.images) {
      console.log('again');

      this.title?.setValue(this.product.title);
      this.description?.setValue(this.product.description);
      this.stock?.setValue(this.product.stock);
      this.brand?.setValue(this.product.brand);
      this.rating?.setValue(this.product.rating);
      this.price?.setValue(this.product.price);
      this.discountPercentage?.setValue(this.product.discountPercentage);
      this.thumbnail?.setValue(this.product.thumbnail);
      this.category?.setValue(this.product.category);
      this.images.at(0).setValue(this.product.images[0]);
      for (let i = 1; i < this.product.images.length; i++) {
        this.images.push(
          this.fb.control(this.product.images[i], Validators.required)
        );
      }
      this.pId = this.product.id;
      this.product = {};
    }
  }
}
