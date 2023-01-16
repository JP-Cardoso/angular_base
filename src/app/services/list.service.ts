// Usando esse service para fazer a exclusão de dados
import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

//Para fazer as requisições http;
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  //Com o método private essa variavel fica apenas acessivel na classe e não ao component
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http:HttpClient) {

  };

  getAll(): Observable<Animal[]> {
    // Fazendo a requisição por meio do observable
    return this.http.get<Animal[]>(this.apiUrl);
  };

  remove(animals: Animal[], animal: Animal) {
    // console.log('Ativando o service');
    return animals.filter((a) => {
      animal.name !== a.name
    });
  };


}
