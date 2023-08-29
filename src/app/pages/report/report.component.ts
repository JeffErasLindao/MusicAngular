import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artista } from 'src/app/interfaces/artista';
import { Cancion } from 'src/app/interfaces/cancion';
import { Album } from 'src/app/interfaces/album';
import { DataServiceService } from 'src/app/providers/data-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  artistas : Artista[] = [];
  canciones: Cancion[] = [];
  albumes : Album[] = [];
  displayedColumns : string[] = ['titulo','duracion','lanzamiento','album'];
  artistasSelect = new FormControl('');

  constructor(private DataProvider : DataServiceService){

  }

  ngOnInit(){
    this.DataProvider.getArtistas().subscribe((response)=>{
      this.artistas = response as Artista[]
    })
  }

  selection(id: number | null) {
    if (id === null) {
      this.canciones = [];
    } else {
      this.DataProvider.getCancionesByArtistaId(id).subscribe((response) => {
        this.canciones = response as Cancion[];
      });
      this.DataProvider.getAlbumesByArtistaId(id).subscribe((response) => {
        this.albumes = response as Album[];
        console.log(this.albumes)
      });
    }
  }

  getAlbumName(albumId: number | null){
    const album = this.albumes.find(a => a.idAlbum === albumId);
    return album ? album.titulo : 'Sin Album';

  }
  
}
