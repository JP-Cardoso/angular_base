import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{

  name: string = 'João Paulo';
  age: number = 23;
  job: string = 'Programador';

  constructor () {

  };

  ngOnInit(): void {
      
  };
}
