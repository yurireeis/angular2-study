import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent implements OnInit {

  @Input() value = 0;

  // @ViewChild('inputField') fieldValueInput: HTMLElement;
  @ViewChild('inputField') fieldValueInput: ElementRef;

  constructor() { }

  ngOnInit() {}

  increment(): void {
    console.log(this.fieldValueInput);
    this.value++;
  }

  decrement(): void { this.value--; }
}
