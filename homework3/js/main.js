const  urlAPI = "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1";

const urlAPIs = ["https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1", "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/2", "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/3"];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function readAPI(resource) {

  const response = await fetch(resource);

  const data = await response.json();

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return data;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function readAllAPI(resource) {
let response, data;
const dbAPI = [];

for (const api of urlAPIs) {
        response = await fetch(api);
        data = await response.json();
        
        if(!response.ok) {
          let message = `An error has occured: ${response.status}`;
          throw new Error(message);
        } 
        dbAPI.push(data);
}     

return dbAPI;
}
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

async function manipulateDOM() {
  const data = await readAllAPI(urlAPIs);

  let index = Math.floor(Math.random()*data.length) + 1;

    const bandName = document.getElementById("band-name");
    bandName.innerHTML = ` ${data[index].name} ${data[index].lastName} `;

    const latestReleaseName= document.getElementById("latest_release_name");
    latestReleaseName .innerHTML = `${data[index].music.latest.name}`;

    const latestReleaseImage = document.getElementById("latest_release_image");
    latestReleaseImage .setAttribute("src", `${data[index].music.latest.image}`); 

  const albumReleaseDate = document.getElementById('latest_release_date');
  const x = new Date(Date.parse(data[index].music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
  const y = new Date(Date.parse(data[index].music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
  const z = new Date(Date.parse(data[index].music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
  
  albumReleaseDate.innerHTML = x + " " + y + ", " + z;

 //// popular section ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const popularURL  = `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${index}/popular`;
  const popularData = await readAPI(popularURL);

  console.log(popularData);
    
for (let i = 0; i < 4; i++) {

  let image = document.getElementById("image"+(i +1));

  image.setAttribute("src", `${popularData[i].image}`);

  let song = document.getElementById("song"+ (i + 1));
  song.innerHTML =  `${popularData[i].name}`;

   song.addEventListener("mouseover", () => {

    ///////////////////////////////////////////////////////////////////////////
    // initialize popular songs
    ///////////////////////////////////////////////////////////////////////////
    for( let j = 0; j < 4; j++) {
    let playPause = document.getElementById("play-pause" + (j+1));
     playPause.innerHTML = ` `;

     let song = document.getElementById("song"+ (i + 1));
     song.style = "color:white";

     let explicit = document.getElementById("explicit"+ (i + 1));
     explicit.style = "color:white";

     let length = document.getElementById("length"+ (i + 1));
     length.style = "color:white";

     let view_count = document.getElementById("view_count"+  (i + 1));
     view_count.style = "color:white"
    }

    ///////////////////////////////////////////////////////////////////////////

    let playPause = document.getElementById("play-pause" + (i+1));
    playPause.innerHTML = `<i class="material-icons">play_arrow</i>`;
  });

  song.addEventListener("click", () => {

    for (let j = 0; j < 4; j++) {
      let song = document.getElementById("song"+ (j+ 1));
     song.style = "color:white";

     let explicit = document.getElementById("explicit"+ (j + 1));
     explicit.style = "color:white";

     let length = document.getElementById("length"+ (j + 1));
     length.style = "color:white";

     let view_count = document.getElementById("view_count"+  (j + 1));
     view_count.style = "color:white"
    }
    let songChosen = document.getElementById("song"+ (i + 1));
     songChosen.style = "color:green";

    let playPause = document.getElementById("play-pause" + (i+1));
    playPause.innerHTML = `<i class="material-icons">pause</i> `;

     let explicit = document.getElementById("explicit"+ (i+ 1));
     explicit.style = "color:green";

     let length = document.getElementById("length"+ (i + 1));
     length.style = "color:green";

     let view_count = document.getElementById("view_count"+  (i + 1));
     view_count.style = "color:green"

    // let audioElement = "audioElement"+ (i+1);
    // console.log('audioElement = ', audioElement);
    // audioElement.play();

    switch  (i+1) {

      case 1:
        audioElement4.pause();
        audioElement3.pause();
        audioElement2.pause();
        audioElement1.play()
        break;
    case 2:
        audioElement4.pause();
        audioElement3.pause();
        audioElement1.pause();
        audioElement2.play();
        break;
     case 3:
      audioElement4.pause();
      audioElement2.pause();
      audioElement1.pause();
        audioElement3.play();
     case 4:
      audioElement3.pause();
      audioElement2.pause();
      audioElement1.pause();
        audioElement4.play();
    }

  })

  let length = document.getElementById("length"+ (i + 1));
  let time = popularData[i].durationInMs;
  time = timeFormating(time);
  length.innerHTML = `${time}` ;

  let view_count = document.getElementById("view_count"+ (i + 1));
 view_count.innerHTML =  `${popularData[i].listeners}`;

}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function timeFormating(ms) {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return (
      seconds == 60 ?
      (minutes+1) + ":00" :
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  manipulateDOM();

  /////////////////////////////////////////////////////////////////////////////
  // audio part
  /////////////////////////////////////////////////////////////////////////////
  let audioElement1 = new Audio('audio/song-1.mp3');
  let audioElement2 = new Audio('audio/song-2.mp3');
  let audioElement3 = new Audio('audio/song-3.mp3');
  let audioElement4 = new Audio('audio/song-4.mp3');
