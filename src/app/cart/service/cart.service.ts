import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from 'protractor';
import { Product } from 'src/app/prdct/product/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productSource = new Subject<Product>();
  product$ = this.productSource.asObservable();

  constructor() { }

  onBuy(product: Product) {
    this.productSource.next(product);
  }
}
