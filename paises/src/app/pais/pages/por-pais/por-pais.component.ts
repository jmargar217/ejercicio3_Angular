import { Component, OnInit } from '@angular/core';
import { PaisOrdenado, SearchPaisInterface } from '../../interfaces/interfacePais.interface';
import { PeticionPaisService } from '../../services/peticion-pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private servicioPais:PeticionPaisService) { }

  ngOnInit(): void {
  }

  obtenerNombrePais():PaisOrdenado[]{
    return this.servicioPais.paises;
  }

}
