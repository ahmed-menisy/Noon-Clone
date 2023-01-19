import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  public products: any = [];
  public totalQuantity: number = 0;
  public grandTotal: number = 0;
  constructor(private cartService: CartService) {


  }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.products = res;

        for (let p of res) {
          this.grandTotal += (p.quantity * p.price);
          this.totalQuantity += p.quantity;
        }

      })


    this.initConfig();
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AcdISVozx83WZu6AXnkTvnt16pBooEsZVhLV5jwABVuHTuez6mDPttl3wiGK4NSAAMwGdIj40VzX64TX',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '9.99',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        size: 'small',
        color: 'blue',
        shape: 'rect'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get()

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);


      },
      onError: err => {
        console.log('OnError', err);

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      }
    };
  }

}
