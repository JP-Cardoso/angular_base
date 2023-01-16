import { Component, OnInit } from '@angular/core';

// Importando a interface
import { Animal } from 'src/app/Animal';

// importando a serveice
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // Usando a interface aqui, tipando o array como um objeto da interface.
  // Quando se implementa a interface, ela meio que tipa todo o objeto,
  // para que o mesmo siga uma regra.
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 5},
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 2 },
    { name: 'Bob', type: 'Horse', age: 8 }
  ];

  animalDetails: string = '';

  constructor(private listService: ListService) {

  };

  ngOnInit(): void {

  };
  // Recebendo um dado que está alinhando com a interface.
  // O void é usado quando a função ou o método não retornar nada.
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  };

  removeAnimal(animal: Animal) {
    console.log('Removendo um animal');
    this.animals = this.listService.remove(this.animals, animal);
  };
}
