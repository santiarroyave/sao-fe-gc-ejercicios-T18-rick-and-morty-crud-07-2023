import { Component, Input, OnInit } from '@angular/core';
import { MisPersonajes } from 'src/app/models/mis-personajes.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{

  @Input() abierto:any;

  // id:number = 0;
  // name:string = "";
  // status:string ="";
  // species:string ="";
  // gender:string ="";
  // origin:string ="";
  // image:string ="";

  personaje: MisPersonajes = {
    id: 0,
    name: "",
    status:"",
    species:"",
    gender:"",
    origin:"",
    image:"",
  };
  enviado = false;

  cerrar(){
    this.abierto = false;
  };

  crear(){
    alert("Creando personaje");

  }

  ngOnInit(): void {
    
  }
}
