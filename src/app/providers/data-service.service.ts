import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //"https://restmusikproject-production.up.railway.app/rest"
  private url:string = "https://restmusikproject-production.up.railway.app/rest";
  private usuarios : string = "/usuario/findAll/json";
  private artistas : string = "/artista/findAll/json";
  private canciones : string = "/cancion/findAll/json";
  private generos : string = "/genero/findAll/json";
  private listas : string = "/listadereproduccion/findAll/json";
  private songsByArtist : string = "/artista/findSongsNumberByArtist/json";
  private songsByGenre: string = "/genero/findSongsByGenre/json";
  private PATH_XBYARTIST : string = ``;

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
    this.PATH_XBYARTIST =  `/cancion/findSongsByArtist/${id}/json`;
    return this.http.get(this.url + this.PATH_XBYARTIST);
  }

  getAlbumesByArtistaId(id:number){
    this.PATH_XBYARTIST =  `/album/findAlbumsByArtist/${id}/json`;
    return this.http.get(this.url + this.PATH_XBYARTIST);
  }

  getSongsByArtist(){
    return this.http.get(this.url + this.songsByArtist);
  }

  getSongsByGenre(){
    return this.http.get(this.url + this.songsByGenre);
  }

}
