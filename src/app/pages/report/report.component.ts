import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artista } from 'src/app/interfaces/artista';
import { Cancion } from 'src/app/interfaces/cancion';
import { DataServiceService } from 'src/app/providers/data-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  artistas : Artista[] = [];
  canciones: Cancion[] = [];
  displayedColumns : string[] = ['titulo','duracion','fecha','link'];
  artistasSelect = new FormControl('');

  constructor(private DataProvider : DataServiceService){

  }

  ngOnInit(){
    this.DataProvider.getArtistas().subscribe((response)=>{
      this.artistas = response as Artista[]
      console.log(this.artistas);
    })
  }

  selection(id: number | null) {
    if (id === null) {
      this.canciones = [];
    } else {
      this.DataProvider.getCancionesByArtistaId(id).subscribe((response) => {
        this.canciones = response as Cancion[];
      });
    }
  }
  
}
