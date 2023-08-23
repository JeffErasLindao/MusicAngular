import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url:string = "http://localhost:3000/rest";
  private usuarios : string = "/usuario/findAll/json";
  private artistas : string = "/artista/findAll/json";
  private canciones : string = "/cancion/findAll/json";
  private generos : string = "/genero/findAll/json";
  private listas : string = "/listadereproduccion/findAll/json";
  private PATH_SONGBYARTIST : string = ``;

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.url + this.usuarios);
  }

  getArtistas(){
    return this.http.get(this.url + this.artistas);
  }

  getCanciones(){
    return this.http.get(this.url + this.canciones);
  }

  getGeneros(){
    return this.http.get(this.url + this.generos);
  }

  getListas(){
    return this.http.get(this.url + this.listas);
  }

  getCancionesByArtistaId(id:number){
    this.PATH_SONGBYARTIST =  `/cancion/findSongsByArtist/${id}/json`;
    return this.http.get(this.url + this.PATH_SONGBYARTIST);
  }

}
