import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Compnents/pages/home/home.component';
import { NavbarComponent } from './Compnents/compnents/navbar/navbar.component';
import { NavCategoriesComponent } from './Compnents/compnents/nav-categories/nav-categories.component';
import { ProductsSwiperComponent } from './Compnents/compnents/products-swiper/products-swiper.component';
import { CarouselComponentComponent } from './Compnents/compnents/carousel-component/carousel-component.component';
import { FristSwiperComponent } from './Compnents/compnents/frist-swiper/frist-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './Compnents/compnents/footer/footer.component';
import { AddProductComponent } from './Compnents/compnents/add-product/add-product.component';
import { ProfileComponent } from './Compnents/pages/profile/profile.component';
import { LayoutComponent } from './Compnents/pages/layout/layout.component';
import { NotFoundComponent } from './Compnents/pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllproductsComponent } from 'src/app/Compnents/pages/allproducts/allproducts.component';
import { ProductsdetailsComponent } from 'src/app/Compnents/pages/productsdetails/productsdetails.component';
import { FilterPipe } from './filter.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { UserProfileComponent } from './Compnents/pages/user-profile/user-profile.component';
import { UpdateUserComponent } from './Compnents/pages/update-user/update-user.component';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Compnents/pages/cart/cart.component';
import { OrderSummryComponent } from './Compnents/pages/cart/order-summry/order-summry.component';
import { LoginPageComponent } from './Compnents/pages/login-page/login-page.component';
import { RegisterPageComponent } from './Compnents/pages/register-page/register-page.component';

import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponentComponent,
    NavCategoriesComponent,
    FristSwiperComponent,
    ProductsSwiperComponent,
    FooterComponent,
    AddProductComponent,
    ProfileComponent,
    LayoutComponent,
    NotFoundComponent,
    AllproductsComponent,
    ProductsdetailsComponent,
    FilterPipe,
    OrderSummryComponent,
    UserProfileComponent,
    UpdateUserComponent,
    CartComponent,
    LoginPageComponent,
    RegisterPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SwiperModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
