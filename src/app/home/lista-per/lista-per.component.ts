import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { MisPersonajesService } from 'src/app/services/mis-personajes.service';

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
  misPersonajes: any = null;
  miPersonaje:any = null;

  // CONSTRUCTORES
  constructor(private personajesService: PersonajesService, private misPersonajesService: MisPersonajesService){ };
  
  // MÉTODOS
  ngOnInit():void{
    this.personajesService.getPersonajes(this.maxPersonajes).subscribe( result => this.personajes = result);
    this.misPersonajesService.getPersonajes().subscribe (result => this.misPersonajes = result);
  };

  seleccionar(id:number){
    this.personajesService.getPersonajeId(id).subscribe( result => this.personaje = result);
  };

  editar(id:number){
    this.misPersonajesService.getPersonajeId(id).subscribe (result => this.miPersonaje = result);
  };

  agregar(){
    alert("agregando");
  }
}
