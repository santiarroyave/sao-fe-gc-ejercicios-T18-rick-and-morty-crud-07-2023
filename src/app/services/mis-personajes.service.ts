import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisPersonajesService {

  constructor(private http: HttpClient) { };

  getPersonajes(){
    // Genera la cantidad de numeros aleatorios que le hayamos pasado como argumento
    return this.http.get("http://localhost:3000/characters/");
  };

  getPersonajeID(id:number){
    return this.http.get(`http://localhost:3000/characters/${id}`);
  }
}
