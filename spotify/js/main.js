import { showRandomArtistInfo, getRandomInt } from "./randomArtistFunction.js";
import { showPopularSongs } from "./showPopularSongsFunction.js";

const url = 'https://613622df8700c50017ef5455.mockapi.io/api/v1/artist'


fetch(url)
  .then(response => response.json())
  .then(function (data)  {
        showRandomArtistInfo(data[getRandomInt(data.length)]);
        showPopularSongs(data, url);
   

  });



  



