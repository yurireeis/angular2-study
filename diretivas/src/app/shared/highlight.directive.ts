import {
  Directive,
  HostListener,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor = 'white';
  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor;
  @HostListener('mouseenter') onmouseenter() { this.backgroundColor = this.highlightColor; }
  @HostListener('mouseleave') onmouseleave() { this.backgroundColor = this.defaultColor; }
  constructor() { }

  ngOnInit() { this.backgroundColor = this.defaultColor; }
}
