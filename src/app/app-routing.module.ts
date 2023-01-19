import { LoginPageComponent } from './Compnents/pages/login-page/login-page.component';
import { RegisterPageComponent } from './Compnents/pages/register-page/register-page.component';
import { UpdateUserComponent } from './Compnents/pages/update-user/update-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Compnents/pages/profile/profile.component';
import { HomeComponent } from './Compnents/pages/home/home.component';
import { NotFoundComponent } from './Compnents/pages/not-found/not-found.component';
import { AllproductsComponent } from './Compnents/pages/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './Compnents/pages/productsdetails/productsdetails.component';
import { CartComponent } from './Compnents/pages/cart/cart.component';

import { UserProfileComponent } from './Compnents/pages/user-profile/user-profile.component';
import { LoggedInGuard } from './logged-in.guard';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Profile', component: ProfileComponent, canActivate:[LoggedInGuard] },
  { path: 'userProfile', component: UserProfileComponent,canActivate:[LoggedInGuard]  },
  { path: 'updateUser', component: UpdateUserComponent },
  { path: 'Profile/:pId', component: ProfileComponent,canActivate:[LoggedInGuard]  },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'products/:productName', component: AllproductsComponent },
  { path: 'productsCat/:productCat', component: AllproductsComponent },
  {path:'productsdetails/:productid',component:ProductsdetailsComponent},
  {path: 'cart',component:CartComponent},
  
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
