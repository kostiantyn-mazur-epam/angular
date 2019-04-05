import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/prdct/product/model/product.interface';
import { ProductsService } from 'src/app/prdct/product/services/products.service';
import { Product } from 'src/app/prdct/product/model/product.model';
import { CartService } from 'src/app/cart/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    console.log(`${product.name} was bought`);
    this.cartService.onBuy(product);
  }
}
