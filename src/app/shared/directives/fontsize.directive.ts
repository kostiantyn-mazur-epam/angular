import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFontsize]'
})
export class FontsizeDirective {

  @Input('appFontsize')
   fontSize: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.setFontsize(this.fontSize);
  }

  private setFontsize(fontSize: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', fontSize);
  }
}
