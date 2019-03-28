import { IProduct } from '../model/product.interface';
import { Product } from '../model/product.model';

export const PRODUCTS: IProduct[] = [
    new Product('product1', 'description1', 10),
    new Product('product2', 'description2', 11),
    new Product('product3', 'description3', 12),
    new Product('product4', 'description4', 13),
    new Product('product5', 'description5', 14)
];

