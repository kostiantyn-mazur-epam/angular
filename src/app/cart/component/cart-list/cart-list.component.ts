import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/prdct/product/model/product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    this.cartService.product$.subscribe(product => this.products.push(product));
  }

}
