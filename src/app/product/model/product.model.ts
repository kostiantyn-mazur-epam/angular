import { Categories } from '../model/categories.model';
import { IProduct } from './product.interface';

export class Product implements IProduct {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category?: Categories,
        public isAvailable?: boolean,
        public userRatings?: number[],
        public relatedProductLinks?: string[]
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
     }
}
