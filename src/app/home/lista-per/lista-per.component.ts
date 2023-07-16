import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-per',
  templateUrl: './lista-per.component.html',
  styleUrls: ['./lista-per.component.css']
})

export class ListaPerComponent implements OnInit{

  // ATRIBUTOS
  maxPersonajes:number = 12;

  personajes:any = null;
  personaje:any = null;

  // CONSTRUCTORES
  constructor(private personajesService: PersonajesService){ };
  
  // MÉTODOS
  ngOnInit():void{
    this.personajesService.getPersonajes(this.maxPersonajes).subscribe( result => this.personajes = result);
  };
  
  seleccionar(id:number){
    this.personajesService.getPersonajeId(id).subscribe( result => this.personaje = result);
  };
}
