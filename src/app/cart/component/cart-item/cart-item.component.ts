import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/products/models/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: {
    product: IProduct;
    quantity: number
  };

  constructor() { }

  ngOnInit() {
  }

}
