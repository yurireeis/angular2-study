import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  task: any = {
    description: 'Task description',
    responsible: {
      user: { name: 'Yuri' }
    }
  };

  constructor() { }

  ngOnInit() { }
}
