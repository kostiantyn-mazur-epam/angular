import { Injectable } from '@angular/core';

import { IProduct } from '../model/product.interface';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  getProducts(): IProduct[] {
    return PRODUCTS;
  }

  constructor() { }
}
