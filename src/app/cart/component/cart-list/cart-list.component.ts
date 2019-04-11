import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartService } from '../../service/cart.service';
import { IProduct } from 'src/app/products/models/product.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: {
    product: IProduct;
    quantity: number;
  }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    this.cartService.product$.subscribe(product => {
      const existingProductIndex = this.products.find(cartItem => cartItem.product.name === product.name);

      if (existingProductIndex) {
        existingProductIndex.quantity++;
      } else {
        this.products.push({ product, quantity: 1 });
      }
    });
  }

  getProductsNumber(): number {
    return this.cartService.getProductsNumber(this.products);
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum(this.products);
  }

  deleteItem(item: {product: IProduct; quantity: number}): void {
    const itemIndex = this.products.findIndex(cartItem => cartItem.product.name === item.product.name);
    this.products.splice(itemIndex, 1);
  }

  addItem(item: {product: IProduct; quantity: number}): void {
    // const product = this.products.find(cartItem => cartItem === item);
    item.quantity++;
  }

  removeItem(item: {product: IProduct; quantity: number}): void {
    // const product = this.products.find(cartItem => cartItem === item);
    item.quantity--;
  }
}
