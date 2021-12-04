import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisOrdenado, SearchPaisInterface } from '../interfaces/interfacePais.interface';


@Injectable({
  providedIn: 'root'
})
export class PeticionPaisService {

  private _paises:PaisOrdenado[]=[];
  private link = "https://restcountries.com/v3.1/name/";

  get paises():PaisOrdenado[]{
    return[...this._paises];
  }

  constructor(private http:HttpClient) { }

  buscarPais(query:string):void{
    this._paises = [];
    this.http.get<SearchPaisInterface[]>(this.link+query).subscribe(datos=>{
      let contador:number = 0;
      for(let i=0; i<datos.length;i++){
        contador++;

        let pais:PaisOrdenado = {
          id:contador,
          nombre:datos[i].name,
          capital: datos[i].capital,
          flag:datos[i].flags,
          poblacion:datos[i].population

        }
        this._paises.push(pais);
      }
    });
  }
}
