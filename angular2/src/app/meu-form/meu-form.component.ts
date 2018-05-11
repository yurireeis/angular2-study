import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  name: string = 'abc';
  person: any = {
    name: 'Yuri',
    age: 31
  };

  constructor() { }

  ngOnInit() { }
}
