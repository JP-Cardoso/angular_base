import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit{
  //Recebendo um dado do componente pai (app.component.ts);
  //Para recebe-lo você precisa, iniciar o @Input antes do constructor.
  @Input() name: string = '';
  @Input() userData!: {email: string, role:string};

  constructor() {

  };

  ngOnInit(): void {
    
  };



}
