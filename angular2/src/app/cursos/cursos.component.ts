import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  providers: [CursosService],
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursoTitle: string;
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.cursoTitle = "Curso do Yuri"
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {}
}
