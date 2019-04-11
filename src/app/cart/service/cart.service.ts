import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from 'protractor';
import { Product } from 'src/app/products/models/product.model';
import { IProduct } from 'src/app/products/models/product.interface';

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

  getProductsNumber(products: any[]): number {
    return products.length;
  }

  getTotalSum(products: {product: IProduct; quantity: number}[]): number {
    return products.reduce((result, cartItem) => {
      return result + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
}
