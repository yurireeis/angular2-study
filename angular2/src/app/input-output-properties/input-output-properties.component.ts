import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent implements OnInit {

  @Input('name') courseName: string;

  constructor() { }

  ngOnInit() {
  }

}
