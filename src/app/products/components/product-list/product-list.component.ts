import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/products/models/product.interface';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/models/product.model';
import { CartService } from 'src/app/cart/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  defaultQuantity = 1;
  products: Promise<IProduct[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: IProduct, quantity: number): void {
    console.log(`${product.name} was bought`);
    this.cartService.onBuy(product, quantity);
  }
}
