import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: string[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    this.cartService.products$.subscribe(product => this.products.push(product));
  }
}
