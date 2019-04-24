import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontsizeDirective } from './directives/fontsize.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, FontsizeDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, FontsizeDirective]
})
export class SharedModule { }
