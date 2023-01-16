import { Component, OnInit } from '@angular/core';

// Importando o activatedRoute
import { ActivatedRoute } from '@angular/router';

// Importando a interface
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  //Aqui estamos dizendo que o a dado animal, pode ou não chegar
  animal?: Animal;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {
    this.getAnimal()
  };

  ngOnInit(): void {

  };

  getAnimal() {
    //Extraindo o id da requisição e o convertendo para number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => this.animal = animal);
  };
}
