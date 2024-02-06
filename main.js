let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_folder = document.querySelector(".track-folder");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    "name": "1- Ashnaei 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/1- Ashnaei.png",
    "path": "BedahehNavazi/Playlist/1- Ashnaei 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "1- Ashnaei 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/1- Ashnaei.png",
    "path": "BedahehNavazi/Playlist/1- Ashnaei 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "2- Avizeh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/2- Avizeh.png",
    "path": "BedahehNavazi/Playlist/2- Avizeh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "2- Avizeh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/2- Avizeh.png",
    "path": "BedahehNavazi/Playlist/2- Avizeh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "3- Esteghamat 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/3- Esteghamat.png",
    "path": "BedahehNavazi/Playlist/3- Esteghamat 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "3- Esteghamat 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/3- Esteghamat.png",
    "path": "BedahehNavazi/Playlist/3- Esteghamat 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "4- Estemrar 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/4- Estemrar.png",
    "path": "BedahehNavazi/Playlist/4- Estemrar 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "4- Estemrar 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/4- Estemrar.png",
    "path": "BedahehNavazi/Playlist/4- Estemrar 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "5- Ostovar 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/5- Ostovar.png",
    "path": "BedahehNavazi/Playlist/5- Ostovar 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "5- Ostovar 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/5- Ostovar.png",
    "path": "BedahehNavazi/Playlist/5- Ostovar 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "6- Omid 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/6- Omid.png",
    "path": "BedahehNavazi/Playlist/6- Omid 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "6- Omid 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/6- Omid.png",
    "path": "BedahehNavazi/Playlist/6- Omid 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "7- Pafeshari 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/7- Pafeshari.png",
    "path": "BedahehNavazi/Playlist/7- Pafeshari 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "7- Pafeshari 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/7- Pafeshari.png",
    "path": "BedahehNavazi/Playlist/7- Pafeshari 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "8- Paydari 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/8- Paydari.png",
    "path": "BedahehNavazi/Playlist/8- Paydari 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "8- Paydari 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/8- Paydari.png",
    "path": "BedahehNavazi/Playlist/8- Paydari 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "9- Poshtkar 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/9- Poshtkar.png",
    "path": "BedahehNavazi/Playlist/9- Poshtkar 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "9- Poshtkar 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/9- Poshtkar.png",
    "path": "BedahehNavazi/Playlist/9- Poshtkar 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "10- Peleh Peleh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/10- Peleh Peleh.png",
    "path": "BedahehNavazi/Playlist/10- Peleh Peleh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "10- Peleh Peleh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/10- Peleh Peleh.png",
    "path": "BedahehNavazi/Playlist/10- Peleh Peleh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "11- Takid 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/11- Takid.png",
    "path": "BedahehNavazi/Playlist/11- Takid 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "11- Takid 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/11- Takid.png",
    "path": "BedahehNavazi/Playlist/11- Takid 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "12- Taeed 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/12- Taeed.png",
    "path": "BedahehNavazi/Playlist/12- Taeed 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "12- Taeed 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/12- Taeed.png",
    "path": "BedahehNavazi/Playlist/12- Taeed 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "13- Tabasom 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/13- Tabasom.png",
    "path": "BedahehNavazi/Playlist/13- Tabasom 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "13- Tabasom 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/13- Tabasom.png",
    "path": "BedahehNavazi/Playlist/13- Tabasom 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "14- Tahrir 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/14- Tahrir.png",
    "path": "BedahehNavazi/Playlist/14- Tahrir 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "14- Tahrir 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/14- Tahrir.png",
    "path": "BedahehNavazi/Playlist/14- Tahrir 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "15- Tahrir 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/15- Tahrir.png",
    "path": "BedahehNavazi/Playlist/15- Tahrir 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "15- Tahrir 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/15- Tahrir.png",
    "path": "BedahehNavazi/Playlist/15- Tahrir 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "16- Tahrir 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/16- Tahrir.png",
    "path": "BedahehNavazi/Playlist/16- Tahrir 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "16- Tahrir 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/16- Tahrir.png",
    "path": "BedahehNavazi/Playlist/16- Tahrir 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "17- Tohfeh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/17- Tohfeh.png",
    "path": "BedahehNavazi/Playlist/17- Tohfeh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "17- Tohfeh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/17- Tohfeh.png",
    "path": "BedahehNavazi/Playlist/17- Tohfeh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "18- Tadavom 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/18- Tadavom.png",
    "path": "BedahehNavazi/Playlist/18- Tadavom 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "18- Tadavom 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/18- Tadavom.png",
    "path": "BedahehNavazi/Playlist/18- Tadavom 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "19- Taraghi 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/19- Taraghi.png",
    "path": "BedahehNavazi/Playlist/19- Taraghi 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "19- Taraghi 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/19- Taraghi.png",
    "path": "BedahehNavazi/Playlist/19- Taraghi 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "20- Tasdigh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/20- Tasdigh.png",
    "path": "BedahehNavazi/Playlist/20- Tasdigh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "20- Tasdigh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/20- Tasdigh.png",
    "path": "BedahehNavazi/Playlist/20- Tasdigh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "21- Tanzim 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/21- Tanzim.png",
    "path": "BedahehNavazi/Playlist/21- Tanzim 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "21- Tanzim 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/21- Tanzim.png",
    "path": "BedahehNavazi/Playlist/21- Tanzim 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "22- Tavakol 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/22- Tavakol.png",
    "path": "BedahehNavazi/Playlist/22- Tavakol 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "22- Tavakol 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/22- Tavakol.png",
    "path": "BedahehNavazi/Playlist/22- Tavakol 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "23- Hadeseh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/23- Hadeseh.png",
    "path": "BedahehNavazi/Playlist/23- Hadeseh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "23- Hadeseh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/23- Hadeseh.png",
    "path": "BedahehNavazi/Playlist/23- Hadeseh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "24- Hekayat 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/24- Hekayat.png",
    "path": "BedahehNavazi/Playlist/24- Hekayat 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "24- Hekayat 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/24- Hekayat.png",
    "path": "BedahehNavazi/Playlist/24- Hekayat 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "25- Hekmat 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/25- Hekmat.png",
    "path": "BedahehNavazi/Playlist/25- Hekmat 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "25- Hekmat 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/25- Hekmat.png",
    "path": "BedahehNavazi/Playlist/25- Hekmat 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "26- Khatereh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/26- Khatereh.png",
    "path": "BedahehNavazi/Playlist/26- Khatereh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "26- Khatereh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/26- Khatereh.png",
    "path": "BedahehNavazi/Playlist/26- Khatereh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "27- Khoroush 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/27- Khoroush.png",
    "path": "BedahehNavazi/Playlist/27- Khoroush 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "27- Khoroush 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/27- Khoroush.png",
    "path": "BedahehNavazi/Playlist/27- Khoroush 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "28- Khoosheh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/28- Khoosheh.png",
    "path": "BedahehNavazi/Playlist/28- Khoosheh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "28- Khoosheh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/28- Khoosheh.png",
    "path": "BedahehNavazi/Playlist/28- Khoosheh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "29- Zendegi 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/29- Zendegi.png",
    "path": "BedahehNavazi/Playlist/29- Zendegi 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "29- Zendegi 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/29- Zendegi.png",
    "path": "BedahehNavazi/Playlist/29- Zendegi 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "30- Zinat 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/30- Zinat.png",
    "path": "BedahehNavazi/Playlist/30- Zinat 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "30- Zinat 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/30- Zinat.png",
    "path": "BedahehNavazi/Playlist/30- Zinat 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "31- Saranj 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/31- Saranj.png",
    "path": "BedahehNavazi/Playlist/31- Saranj 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "31- Saranj 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/31- Saranj.png",
    "path": "BedahehNavazi/Playlist/31- Saranj 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "32- Shak 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/32- Shak.png",
    "path": "BedahehNavazi/Playlist/32- Shak 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "32- Shak 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/32- Shak.png",
    "path": "BedahehNavazi/Playlist/32- Shak 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "33- Shokoofeh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/33- Shokoofeh.png",
    "path": "BedahehNavazi/Playlist/33- Shokoofeh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "33- Shokoofeh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/33- Shokoofeh.png",
    "path": "BedahehNavazi/Playlist/33- Shokoofeh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "34- Sabr 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/34- Sabr.png",
    "path": "BedahehNavazi/Playlist/34- Sabr 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "34- Sabr 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/34- Sabr.png",
    "path": "BedahehNavazi/Playlist/34- Sabr 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "35- Torreh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/35- Torreh.png",
    "path": "BedahehNavazi/Playlist/35- Torreh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "35- Torreh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/35- Torreh.png",
    "path": "BedahehNavazi/Playlist/35- Torreh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "36- Torreh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/36- Torreh.png",
    "path": "BedahehNavazi/Playlist/36- Torreh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "36- Torreh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/36- Torreh.png",
    "path": "BedahehNavazi/Playlist/36- Torreh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "37- Orouj 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/37- Orouj.png",
    "path": "BedahehNavazi/Playlist/37- Orouj 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "37- Orouj 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/37- Orouj.png",
    "path": "BedahehNavazi/Playlist/37- Orouj 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "38- Ahd 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/38- Ahd.png",
    "path": "BedahehNavazi/Playlist/38- Ahd 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "38- Ahd 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/38- Ahd.png",
    "path": "BedahehNavazi/Playlist/38- Ahd 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "39- Ghaayat 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/39- Ghaayat.png",
    "path": "BedahehNavazi/Playlist/39- Ghaayat 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "39- Ghaayat 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/39- Ghaayat.png",
    "path": "BedahehNavazi/Playlist/39- Ghaayat 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "40- Ghorbat 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/40- Ghorbat.png",
    "path": "BedahehNavazi/Playlist/40- Ghorbat 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "40- Ghorbat 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/40- Ghorbat.png",
    "path": "BedahehNavazi/Playlist/40- Ghorbat 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "41- Forookesh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/41- Forookesh.png",
    "path": "BedahehNavazi/Playlist/41- Forookesh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "41- Forookesh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/41- Forookesh.png",
    "path": "BedahehNavazi/Playlist/41- Forookesh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "42- Fesordeh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/42- Fesordeh.png",
    "path": "BedahehNavazi/Playlist/42- Fesordeh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "42- Fesordeh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/42- Fesordeh.png",
    "path": "BedahehNavazi/Playlist/42- Fesordeh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "43- Ghol 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/43- Ghol.png",
    "path": "BedahehNavazi/Playlist/43- Ghol 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "43- Ghol 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/43- Ghol.png",
    "path": "BedahehNavazi/Playlist/43- Ghol 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "44- Keshesh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/44- Keshesh.png",
    "path": "BedahehNavazi/Playlist/44- Keshesh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "44- Keshesh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/44- Keshesh.png",
    "path": "BedahehNavazi/Playlist/44- Keshesh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "45- Kesh-o-Ghos 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/45- Kesh-o-Ghos.png",
    "path": "BedahehNavazi/Playlist/45- Kesh-o-Ghos 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "45- Kesh-o-Ghos 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/45- Kesh-o-Ghos.png",
    "path": "BedahehNavazi/Playlist/45- Kesh-o-Ghos 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "46- Kooshesh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/46- Kooshesh.png",
    "path": "BedahehNavazi/Playlist/46- Kooshesh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "46- Kooshesh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/46- Kooshesh.png",
    "path": "BedahehNavazi/Playlist/46- Kooshesh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "47- Golbarg 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/47- Golbarg.png",
    "path": "BedahehNavazi/Playlist/47- Golbarg 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "47- Golbarg 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/47- Golbarg.png",
    "path": "BedahehNavazi/Playlist/47- Golbarg 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "48- Geleh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/48- Geleh.png",
    "path": "BedahehNavazi/Playlist/48- Geleh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "48- Geleh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/48- Geleh.png",
    "path": "BedahehNavazi/Playlist/48- Geleh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "49- Labkhand 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/49- Labkhand.png",
    "path": "BedahehNavazi/Playlist/49- Labkhand 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "49- Labkhand 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/49- Labkhand.png",
    "path": "BedahehNavazi/Playlist/49- Labkhand 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "50- Mobaheseh 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/50- Mobaheseh.png",
    "path": "BedahehNavazi/Playlist/50- Mobaheseh 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "50- Mobaheseh 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/50- Mobaheseh.png",
    "path": "BedahehNavazi/Playlist/50- Mobaheseh 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "51- Moshabak 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/51- Moshabak.png",
    "path": "BedahehNavazi/Playlist/51- Moshabak 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "51- Moshabak 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/51- Moshabak.png",
    "path": "BedahehNavazi/Playlist/51- Moshabak 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "52- Masaaeb 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/52- Masaaeb.png",
    "path": "BedahehNavazi/Playlist/52- Masaaeb 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "52- Masaaeb 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/52- Masaaeb.png",
    "path": "BedahehNavazi/Playlist/52- Masaaeb 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "53- Masaaeb 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/53- Masaaeb.png",
    "path": "BedahehNavazi/Playlist/53- Masaaeb 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "53- Masaaeb 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/53- Masaaeb.png",
    "path": "BedahehNavazi/Playlist/53- Masaaeb 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "54- Moj 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/54- Moj.png",
    "path": "BedahehNavazi/Playlist/54- Moj 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "54- Moj 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/54- Moj.png",
    "path": "BedahehNavazi/Playlist/54- Moj 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "55- Naaz 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/55- Naaz.png",
    "path": "BedahehNavazi/Playlist/55- Naaz 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "55- Naaz 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/55- Naaz.png",
    "path": "BedahehNavazi/Playlist/55- Naaz 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "56- Nasim 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/56- Nasim.png",
    "path": "BedahehNavazi/Playlist/56- Nasim 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "56- Nasim 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/56- Nasim.png",
    "path": "BedahehNavazi/Playlist/56- Nasim 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "57- Neshast 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/57- Neshast.png",
    "path": "BedahehNavazi/Playlist/57- Neshast 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "57- Neshast 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/57- Neshast.png",
    "path": "BedahehNavazi/Playlist/57- Neshast 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "58- Veda 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/58- Veda.png",
    "path": "BedahehNavazi/Playlist/58- Veda 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "58- Veda 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/58- Veda.png",
    "path": "BedahehNavazi/Playlist/58- Veda 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "59- Veda 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/59- Veda.png",
    "path": "BedahehNavazi/Playlist/59- Veda 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "59- Veda 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/59- Veda.png",
    "path": "BedahehNavazi/Playlist/59- Veda 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "60- Vafaa 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/60- Vafaa.png",
    "path": "BedahehNavazi/Playlist/60- Vafaa 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "60- Vafaa 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/60- Vafaa.png",
    "path": "BedahehNavazi/Playlist/60- Vafaa 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "61- Vafaadaari 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/61- Vafaadaari.png",
    "path": "BedahehNavazi/Playlist/61- Vafaadaari 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "61- Vafaadaari 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/61- Vafaadaari.png",
    "path": "BedahehNavazi/Playlist/61- Vafaadaari 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "62- Haft-o-Hasht 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/62- Haft-o-Hasht.png",
    "path": "BedahehNavazi/Playlist/62- Haft-o-Hasht 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "62- Haft-o-Hasht 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/62- Haft-o-Hasht.png",
    "path": "BedahehNavazi/Playlist/62- Haft-o-Hasht 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "63- Haft-o-Hasht 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/63- Haft-o-Hasht.png",
    "path": "BedahehNavazi/Playlist/63- Haft-o-Hasht 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "63- Haft-o-Hasht 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/63- Haft-o-Hasht.png",
    "path": "BedahehNavazi/Playlist/63- Haft-o-Hasht 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "64- Yaad 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/64- Yaad.png",
    "path": "BedahehNavazi/Playlist/64- Yaad 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "64- Yaad 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/64- Yaad.png",
    "path": "BedahehNavazi/Playlist/64- Yaad 2.mp3",
    "folder": "Playlist"
  },
  {
    "name": "65- Yaadaavari 1",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/65- Yaadaavari.png",
    "path": "BedahehNavazi/Playlist/65- Yaadaavari 1.mp3",
    "folder": "Playlist"
  },
  {
    "name": "65- Yaadaavari 2",
    "artist": "Mohammad Rezaei Nia",
    "image": "BedahehNavazi/Playlist/65- Yaadaavari.png",
    "path": "BedahehNavazi/Playlist/65- Yaadaavari 2.mp3",
    "folder": "Playlist"
  }
];


function random_bg_color() {

  // Get a number between 128 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 128;
  let green = Math.floor(Math.random() * 256) + 128;
  let blue = Math.floor(Math.random() * 256) + 128;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url('" + track_list[track_index].image + "')";
  track_name.textContent = track_list[track_index].name;
  track_folder.textContent = track_list[track_index].folder;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


function createScrollableList() {
  const trackListContainer = document.getElementById('trackList');
  const folders = {};

  track_list.forEach((track, index) => {
    if (!folders[track.folder]) {
      folders[track.folder] = true;

      const folderItem = document.createElement('div');
      folderItem.textContent = track.folder;
      folderItem.classList.add('listItem', 'folderName');
      trackListContainer.appendChild(folderItem);
    }

    const trackItem = document.createElement('div');
    const spaces = '\xa0'.repeat(4); // '\xa0' is a non-breaking space
    trackItem.textContent = `${spaces} ${track.name}`;
    trackItem.classList.add('listItem', 'trackItem');
    trackItem.addEventListener('click', function() {
      track_index = index;
      loadTrack(track_index);
      playTrack();
      highlightTrack(track_index);
    });

    trackListContainer.appendChild(trackItem);
  });
}


function highlightTrack(index) {
  const trackItems = document.querySelectorAll('.trackItem');
  trackItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('activeTrack'); // Apply a class to highlight the active track
    } else {
      item.classList.remove('activeTrack'); // Remove the class from other tracks
    }
  });
}



// Call the function to generate the scrollable list
createScrollableList();



// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  highlightTrack(track_index);
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

