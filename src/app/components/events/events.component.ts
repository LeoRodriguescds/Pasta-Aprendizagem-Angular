import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  show: boolean = true;

  names = ['Leo', 'Melissa', 'Anaiza', 'Marcos' ,'Flávia', 'Anita', 'Geraldo', 'Guilherme']
  name = '';

  showMessage(): void {
    this.show = !this.show; //Irá criar um toggle que mudará o estado do boolean.
  }

  showName(): void {
    this.name = this.names[Math.floor(Math.random() * this.names.length)];
  }

}
