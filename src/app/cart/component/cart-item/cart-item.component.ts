import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/prdct/product/model/product.interface';

type CartItem = {
  product: IProduct;
  quantity: number
};

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
