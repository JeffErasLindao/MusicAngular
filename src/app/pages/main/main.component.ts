import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/providers/data-service.service';
import { Chart } from 'chart.js/auto';
import { Genero } from 'src/app/interfaces/genero';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  songsByArtist : any[] = [];
  generos : any[] = [];
  constructor(private DataProvider : DataServiceService){

  }

  ngOnInit(){
    this.DataProvider.getSongsByArtist().subscribe((response)=>{
      this.songsByArtist = response as any[]
      this.DataProvider.getSongsByGenre().subscribe((response)=>{
        this.generos = response as any[]
        this.initializeGraphs(this.songsByArtist,this.generos);
      })
    })
  }

  private initializeGraphs(songsByArtist: any[], generos: any[]) {
    console.log(songsByArtist,generos);
    
    // Top 10 Artist and their number of songs
    const top10Artist = songsByArtist.sort((a,b)=>b.numeroDeCanciones-a.numeroDeCanciones).slice(0, 10);
    const data_artists = {
      labels: top10Artist.map((artista) => artista.nombre),
      datasets: [
        {
          label: 'Numero de canciones por artista',
          data: top10Artist.map((artista) => artista.numeroDeCanciones),
          backgroundColor: '#7da3e8',
          borderWidth: 1,
        },
      ],
    };
    const chart_mostVotes = new Chart(
      document.getElementById('artistSongs') as HTMLCanvasElement,
      {
        type: 'bar',
        data: data_artists,
        options: {
          responsive: true,
          interaction: {
            intersect: false,
          },
        },
      }
    );

    // Top 3 genre with most songs
    const top3genre = generos.slice(0, 3);
    const labels = top3genre.map((genre) => genre.nombre);
    const data_genres = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: top3genre.map((genre) => genre.NumeroDeCanciones),
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#000',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      }]
    };

    const chart_mostGenres = new Chart(
      document.getElementById('bestGenres') as HTMLCanvasElement,
      {
        type: 'pie',
        data: data_genres,
        options: {
          responsive: true,
          interaction: {
            intersect: false,
          },
        },
      }
    );


  }
}


