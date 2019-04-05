import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../component/cart.component';
import { ProductModule } from 'src/app/prdct/product.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
