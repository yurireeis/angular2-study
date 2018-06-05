import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }
}
