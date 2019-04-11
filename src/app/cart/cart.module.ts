import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from 'src/app/products/product.module';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    ProductModule,
    SharedModule
  ],
  exports: [CartListComponent, CartItemComponent]
})
export class CartModule { }
