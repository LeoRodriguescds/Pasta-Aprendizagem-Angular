import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.css']
})
export class ConditionalsComponent {

  //Por esse elemento ser true ele irá determinar quem do HTML seerá mostrado.
  canShow: boolean = true;

  //Por conta do nome não bater o determinado na condicional ele não será mostrado no html.
  name = 'Melissa';
}
