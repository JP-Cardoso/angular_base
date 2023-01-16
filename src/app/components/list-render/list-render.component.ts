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

  ];

  animalDetails: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
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
    //Essa exclusão na linha 41 é apenas de modo visual.
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    //Passando o id do animal que será excluido.
    //Para todo o evento que houver interação com o BD,devemos atribuir o subscribe, mesmo que não o usemos.
    this.listService.remove(animal.id).subscribe();
  };

  getAnimals(): void {
    //Aqui ele espera o evento para fazer algo
    this.listService.getAll().subscribe((animals) => (this.animals= animals));
  };
}
