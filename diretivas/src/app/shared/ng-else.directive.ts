import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input('appNgElse') set ngElse(condition: boolean) {
    condition ? this._viewContainerRef.clear() : this._viewContainerRef.createEmbeddedView(this._templateRef);
  }
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }
}
