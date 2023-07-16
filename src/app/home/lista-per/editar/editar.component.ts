import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  @Input() personaje:any;

  cerrar(){
    this.personaje = null;
  };

  guardar(){
    alert("Se ha guardado");
  };
}
