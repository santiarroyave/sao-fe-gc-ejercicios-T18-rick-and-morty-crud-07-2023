import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  @Input() abierto:any;

  id:number = 0;
  name:string = "";
  status:string ="";
  species:string ="";
  gender:string ="";
  origin:string ="";
  image:string ="";

  cerrar(){
    this.abierto = false;
  };

  crear(){
    alert("Creando personaje");
  }
}
