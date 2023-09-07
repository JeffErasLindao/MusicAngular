import { Component } from '@angular/core';
import {Song } from 'src/app/interfaces/song';
import { DatasongService } from 'src/app/providers/datasong.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})


export class MoreComponent {
  // Funciones para controlar la reproducción de la canción
  
  constructor(private dataProvider: DatasongService) { }
  public datasong : Song[] = [];
  currentSongIndex = 0; // Índice de la canción actual

  play() {
    const audio = <HTMLAudioElement>document.querySelector('audio');
    audio.play();
  }

  pause() {
    const audio = <HTMLAudioElement>document.querySelector('audio');
    audio.pause();
  }

  nextSong() {
    if (this.currentSongIndex < this.datasong.length - 1) {
      this.currentSongIndex++;
      this.loadCurrentSong();
      this.play();
    }
  }

  previousSong() {
    if (this.currentSongIndex > 0) {
      this.currentSongIndex--;
      this.loadCurrentSong();
      this.play();
    }
  }

  loadCurrentSong() {
    const audio = <HTMLAudioElement>document.querySelector('audio');
    audio.src = `assets/songs/${this.datasong[this.currentSongIndex].cancionmp3}.mp3`;
    audio.load();
  }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.datasong = (response as Song[]); 
    })
    this.loadCurrentSong();
    // Reproduce automáticamente la canción al cargar la página
    this.play();
  }


}