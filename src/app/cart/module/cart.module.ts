import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from 'src/app/prdct/product.module';
import { CartListComponent } from '../component/cart-list/cart-list.component';
import { CartItemComponent } from '../component/cart-item/cart-item.component';


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [CartListComponent, CartItemComponent]
})
export class CartModule { }
