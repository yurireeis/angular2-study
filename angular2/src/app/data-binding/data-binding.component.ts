import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = `https://yuri.com`;
  urlImage = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPfA3-9ofx0dZhRt_xEhc4N6YTJLr-6rLKcvHDXX1LO4RkGqr`;
  currentValue: string;
  isOver: boolean;
  value = 0;

  constructor() { }

  getNumbertoSum(): number { return 1; }

  getLikeCourse(): boolean { return true; }

  buttonIsClicked(): void { alert('Botao Clicado'); }

  onKeyUp(event: KeyboardEvent): void { console.log(this.currentValue); }

  save(value): void { console.log(value); }

  onMouseIn(): void { this.isOver = true; }

  onMouseOut(): void { this.isOver = false; }

  ngOnInit() {}
}
