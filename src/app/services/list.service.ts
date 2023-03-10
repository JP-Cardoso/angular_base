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

  //Por se tratar apenas de um item, não precisamos passar todo o array de animals que vem do banco.
  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  };

  remove(id: number) {
    //Aqui removemos de fato o itrm do banco de dados.
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  };


}
