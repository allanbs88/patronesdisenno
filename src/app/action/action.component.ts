import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  descripcion: string;
  estado:boolean;
  fecha:Date;
  id:number;

  constructor() { }

  ngOnInit(): void {
    this.id = 0;
    this.descripcion='';
    this.estado = true;
    
  }
  agregar(){

  }
  eliminar(){

  }
  asignar(){
    
  }

}
