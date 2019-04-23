import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontsizeDirective } from './directives/fontsize.directive';

@NgModule({
  declarations: [HighlightDirective, FontsizeDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, FontsizeDirective]
})
export class SharedModule { }
