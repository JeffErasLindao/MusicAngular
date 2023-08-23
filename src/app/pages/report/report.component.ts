import { Component } from '@angular/core';
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
  displayedColumns : string[] = ['idCancion','titulo','duracion','fecha','link'];
  autoresSelect = new FormControl('');

  constructor(private DataProvider : DataServiceService){

  }

  ngOnInit(){
    this.DataProvider.getArtistas.subscribe((response)=>{
      this.artistas = response as Autor[]
    })
  }

  selection(id: number | null) {
    if (id === null) {
      this.libros = [];
    } else {
      this.DataProvider.getResponseLibroByAutorId(id).subscribe((response) => {
        this.libros = response as Libro[];
      });
    }
  }
  
}
