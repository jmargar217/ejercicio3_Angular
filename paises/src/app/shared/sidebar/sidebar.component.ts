import { Component, OnInit } from '@angular/core';
import { PeticionPaisService } from 'src/app/pais/services/peticion-pais.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private servicio:PeticionPaisService) { }

  ngOnInit(): void {
  }

  addBusqueda(event:any):void{
    if(event.keyCode=="13"){
      this.servicio.buscarPais(event.target.value);
    }
  }

}
