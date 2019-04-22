import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from 'protractor';
import { Product } from 'src/app/products/models/product.model';
import { IProduct } from 'src/app/products/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private productSource = new Subject<Product>();
  // product$ = this.productSource.asObservable();
  private productSource = new Subject<Array<{ product: IProduct; quantity: number }>>();
  private products: {
    product: IProduct;
    quantity: number;
  }[] = [];
  products$ = this.productSource.asObservable();

  constructor() { }

  onBuy(product: Product, quantity: number) {
    // this.productSource.next(product);
    const existingProductIndex = this.products.find(cartItem => cartItem.product.name === product.name);

    if (existingProductIndex) {
      existingProductIndex.quantity += quantity;
    } else {
      this.products.push({ product, quantity: 1 });
    }

    this.productSource.next(this.products);
  }

  getProductsNumber(): number {
    return this.products.length;
  }

  getTotalSum(): number {
    return this.products.reduce((result, cartItem) => {
      return result + cartItem.product.price * cartItem.quantity;
    }, 0);
  }

  deleteItem(itemName: string): void {
    const itemIndex = this.products.findIndex(cartItem => cartItem.product.name === itemName);
    this.products.splice(itemIndex, 1);
  }

  addItem(itemName: string): void {
    const product = this.products.find(cartItem => cartItem.product.name === itemName);
    product.quantity++;
  }

  removeItem(itemName: string): void {
    const product = this.products.find(cartItem => cartItem.product.name === itemName);
    product.quantity--;
  }
}
