import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor;
  @HostListener('mouseenter') onMouseOver() { this.backgroundColor = 'yellow'; }
  @HostListener('mouseleave') onMouseLeave() { this.backgroundColor = 'white'; }
  constructor() { }
}
