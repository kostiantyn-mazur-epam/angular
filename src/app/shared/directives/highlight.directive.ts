import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private bgColor = null;

  constructor(private el: ElementRef) { }

  @HostBinding('style.backgroundColor') get getBgColor() {
    return this.bgColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'green';
  }

  @HostListener('click') onClick() {
    this.bgColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = null;
  }
}
