import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: 'João', type: 'dog', age: 10},
    {name: 'Ana', type: 'cat', age: 5},
    {name: 'Luis', type: 'dog', age: 6},
    {name: 'Kayo', type: 'bird', age: 2},
    {name: 'Eduarda', type: 'dog', age: 12}
  ]

  animal: Animal = {
    name: 'teste',
    type: 'teste',
    age: 0
  }

  animalDetail = '';

  showAge(animal: Animal) {
    this.animalDetail = `Ò pet ${animal.name} tem ${animal.age} anos de idade.`
  }

  constructor(private listService: ListService) {}

  removeAnimal(animal: Animal) {
    console.log('Reemovendo...')
    this.animals = this.listService.remove(this.animals, animal)
  }

}
