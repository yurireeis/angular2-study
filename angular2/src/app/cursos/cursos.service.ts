import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(): Array<string> { return ["AngularJS", "Angular", "ReactJS"] }
}
