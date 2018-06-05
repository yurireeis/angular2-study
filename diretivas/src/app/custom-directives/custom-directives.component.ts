import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  isShow = false;

  constructor() { }

  ngOnInit() { }

  showCourses(): void { this.isShow = !this.isShow; }
}
