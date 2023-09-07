// :::::::::  FUNCTIONS ::::::::::
function renderSongs() {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = "";
  
    songs.forEach((song, index) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
  
      swiperSlide.innerHTML = `
        <div class="player">
          <div class="cover">
            <img src="${song.image}" />
          </div>
  
          <div class="song">
            <h1 class="title">${song.title}</h1>
            <h2 class="artist">${song.artist}</h2>
          </div>
  
          <audio class="audio" id="audio${index}" preload="true" controls>
            <source type="audio/mp3" src="${song.path}">
          </audio>
          <div class="buttons">
            <div class="previous" onClick="stopMusic()">
              <img src="./assets/icon/previous.png">
            </div>
            <div class="playPause" id="playPause${index}">
              <img src="./assets/icon/play.png" id="playPauseIcon${index}">
            </div>
            <div class="next" onClick="stopMusic()">
              <img src="./assets/icon/next.png">
            </div>
          </div>
        </div>
      `;
      swiperWrapper.appendChild(swiperSlide);
      
      // To add playPause feature
      const playPauseButton = document.querySelector(`#playPause${index}`);
      playPauseButton.addEventListener("click", () => playPause(index));
    });
  }
  
  function stopMusic() {
    const audios = document.querySelectorAll(".audio");
    const playPauseIcons = document.querySelectorAll("[id^='playPauseIcon']");
  
    audios.forEach((audio, index) => {
      audio.pause();
      audio.currentTime = 0;
      playPauseIcons[index].src = "./assets/icon/play.png";
    });
  }
  
  function playPause(index) {
    const audio = document.querySelector(`#audio${index}`);
    const playPauseIcon = document.querySelector(`#playPauseIcon${index}`);
  
    if (audio.paused) {
      audio.play();
      playPauseIcon.src = "./assets/icon/pause.png";
    } else {
      audio.pause();
      playPauseIcon.src = "./assets/icon/play.png";
    }
  }
   
  // ::::::::::  Variables :::::::::::::::
  const songs = [
    {
      title: "SAVE YOUR TEARS",
      artist: "THE WEEKND",
      path: "./assets/songs/TheWeeknd_SaveYourTears.mp3",
      image: "./assets/img/TheWeeknd_SaveYourTears.png",
    },  
    {
      title: "HARRY STYLES",
      artist: "AS IT WAS",
      path: "./assets/songs/HarryStyles_AsItWas.mp3",
      image: "./assets/img/HarryStyles_AsItWas.png",  
    },
    {
      title: "COLDPLAY",
      artist: "PARADISE",
      path: "./assets/songs/Coldplay_Paradise.mp3",
      image: "./assets/img/Coldplay_Paradise.jpeg",  
    },
    {
      title: "QUEEN",
      artist: "BOHEMIAN RHAPSODY",
      path: "./assets/songs/Queen_BohemianRhapsody.mp3",
      image: "./assets/img/Queen_BohemianRhapsody.jpg",  
    },
    {
        title: "ALAKALOIDES",
        artist: "ELLA VIENE DEL FUTURO",
        path: "./assets/songs/Alkaloides_EllaVienedelFuturo.mp3",
        image: "./assets/img/Alkaloides_EllaVienedelFuturo.jpg",  
      },
    {
        title: "LA MAQUINA CAMALEON",
        artist: "MOTORA",
        path: "./assets/songs/Motora_LaMaquinaCamaleon.mp3",
        image: "./assets/img/Motora_LaMaquinaCamaleon.webp",  
    },
  ];
  

  
  // :::::::::::  MAIN  ::::::::::
  window.onload = () => {
    renderSongs();
  
    
    // Slider
    const swiper = new Swiper(".swiper", {
      cssMode: false,
      navigation: {
        nextEl: ".next",
        prevEl: ".previous",
      },
    });
    swiper.on("slideChange", stopMusic);
  };