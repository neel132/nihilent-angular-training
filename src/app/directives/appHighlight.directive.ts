import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private highlightColor = 'yellow';
  @Input('appHighlight') set highlightColorInput(color: string) {
    this.highlightColor = color?.trim() ? color: 'yellow';
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}