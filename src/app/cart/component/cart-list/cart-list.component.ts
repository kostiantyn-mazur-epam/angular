import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/prdct/product/model/product.model';
import { CartService } from '../../service/cart.service';
import { IProduct } from 'src/app/prdct/product/model/product.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    this.cartService.product$.subscribe(product => this.products.push(product));
  }

  getProductsNumber(): number {
    return this.products.length;
  }

  getTotalSum(): number {
    return this.products.reduce((result, product) => {
      return result + product.price;
    }, 0);
  }
}
