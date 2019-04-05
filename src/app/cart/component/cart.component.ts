import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from 'src/app/prdct/product/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    this.cartService.product$.subscribe(product => this.products.push(product));
  }
}
