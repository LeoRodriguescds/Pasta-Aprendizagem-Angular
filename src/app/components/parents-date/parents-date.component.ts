import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parents-date',
  templateUrl: './parents-date.component.html',
  styleUrls: ['./parents-date.component.css']
})
export class ParentsDateComponent {
    @Input() name: string = '';
}
