import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  currentLang: string = ""
  isLogged: boolean = false;
  constructor(public translate: TranslateService, private router: Router, private cartService: CartService, private _UserService: UserService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en'
    this.translate.use(this.currentLang)

    this._UserService.loggedStatus().subscribe((stat) => {
      this.isLogged = stat;
    })
  }
  public totalItem: number = 0;


  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.totalItem = 0;
        for (let p of res) {

          this.totalItem += p.quantity;
        }

      })
    this._UserService.loggedStatus;
  }
  onchange(e: any) {

    this.router.navigate(['/products', e.target.value]);
    console.log(e.target.value);

  }
  changeCurrentLang(e: any) {

    let lang = e.target.innerText;
    e.target.innerText = (lang == "ar") ? 'en' : 'ar';
    this.translate.use((lang == "ar") ? 'ar' : 'en');
    localStorage.setItem("currentLang", (lang == "ar") ? 'ar' : 'en');

  }
  logout() {
    localStorage.clear();
    this._UserService.isLoggedSubject.next(false);
    this.cartService.productList.next({})

  }

}
