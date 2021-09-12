import { showRandomArtistInfo, getRandomInt } from "./randomArtistFunction.js";
import { showPopularSongs, array } from "./showPopularSongsFunction.js";
import { playRandomMusic } from "./playRandomMusicFunction.js";

const url = 'https://613622df8700c50017ef5455.mockapi.io/api/v1/artist'


fetch(url)
  .then(response => response.json())
  .then(function (data)  {
      const randomInt = getRandomInt(data.length);
      showRandomArtistInfo(data[randomInt]);
      showPopularSongs(url, randomInt);
      playRandomMusic(array);
   

  });



  



