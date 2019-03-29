import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../model/product.model';
import { CartService } from 'src/app/cart/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log(`${this.product.name} was bought`);
    this.cartService.onBuy(this.product.name);
  }
}
