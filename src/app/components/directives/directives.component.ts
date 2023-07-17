import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size = 40;
  color = 'blue';
  font = 'arial';

  // Definimos as classes que quremos por aqui;
  //Podemos criar mais de uma classe com dierentes sub-classes dentro.
  classes = ['big-red-title'];
}
