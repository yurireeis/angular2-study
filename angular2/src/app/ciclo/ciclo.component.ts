import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked {

  @Input() value: number;

  constructor() { console.log('construtor'); }

  ngOnInit() { console.log('onInit'); }

  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }

  ngAfterContentInit() { console.log('ngAfterContentInit'); }

  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }

  ngDoCheck() { console.log('doCheck'); }

  ngOnChanges() { console.log('onChanges'); }

  ngOnDestroy() { console.log('onDestroy'); }

}
