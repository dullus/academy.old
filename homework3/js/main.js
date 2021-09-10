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

  

    const bandName = document.getElementById("band-name")
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

  console.log("image" + ( i + 1));

  let image = document.getElementById("image"+(i +1));

  console.log(popularData[i].image);
  image.setAttribute("src", `${popularData[i].image}`);

  let song = document.getElementById("song"+ (i + 1));
  song.innerHTML =  `${popularData[i].name}`;

  let length = document.getElementById("length"+ (i + 1));
  let time = popularData[i].durationInMs;
  time = timeFormating(time);
  length.innerHTML = `${time}` ;

  let view_count = document.getElementById("view_count"+ (i + 1));
 view_count.innerHTML =  `${popularData[i].listeners}`;

 console.log("view_count"+ i + 1)
}

}
//   let element = "image" + "1";

//   const image1 = document.getElementById(element);
//   image1.setAttribute("src",  `${popularData[1].image}`);

//   const song1 = document.getElementById("song1");
//   song1.innerHTML =  `${popularData[1].name}`;

 
//  const length1 = document.getElementById("length1");
//  let time = popularData[1].durationInMs;
//  time = timeFormating(time);
//  length1.innerHTML = `${time}` ;

//  const view_count1 = document.getElementById("view_count1");
//  view_count1.innerHTML =  `${popularData[1].listeners}`;
 

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