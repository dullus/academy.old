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

  console.log(data.length);
  let index = Math.floor(Math.random()*data.length) + 1;
  console.log(index);

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
    
  }
manipulateDOM();








 
