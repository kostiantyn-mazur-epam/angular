import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartService } from '../../service/cart.service';
import { IProduct } from 'src/app/products/models/product.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  private subscription: any;

  products: {
    product: IProduct;
    quantity: number;
  }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    // this.subscription = this.cartService.product$.subscribe(product => {
    //   const existingProductIndex = this.products.find(cartItem => cartItem.product.name === product.name);

    //   if (existingProductIndex) {
    //     existingProductIndex.quantity++;
    //   } else {
    //     this.products.push({ product, quantity: 1 });
    //   }
    // });
    this.subscription = this.cartService.products$.subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getProductsNumber(): number {
    return this.cartService.getProductsNumber();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  deleteItem(itemName: string): void {
    this.cartService.deleteItem(itemName);
  }

  addItem(itemName: string): void {
    this.cartService.addItem(itemName);
  }

  removeItem(itemName: string): void {
    this.cartService.removeItem(itemName);
  }
}
