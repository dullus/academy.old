async function readAPI() {

  const urlAPI = 'https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1';

  const response = await fetch(urlAPI)

  // console.log(response);

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json(); 
}

function manipulateDOM() {
  readAPI()
  .then(data => {
    console.log(data);
    
    const bandName = document.getElementById("band-name")
    bandName.innerHTML = ` ${data.name} ${data.lastName} `;

    const latestReleaseName= document.getElementById("latest_release_name");
    latestReleaseName .innerHTML = `${data.music.latest.name}`;

    const latestReleaseImage = document.getElementById("latest_release_image");
    latestReleaseImage .setAttribute("src", `${data.music.latest.image}`); 

  const albumReleaseDate = document.getElementById('latest_relase_date');
  const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
  const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
  const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
  
  albumReleaseDate.innerHTML = x + " " + y + ", " + z;
    

  })
}

manipulateDOM();

function manipulateDate() {
  const albumReleaseDate = document.getElementById('latest_relase_date');
  const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});

}


// const albumReleaseDate = document.getElementById('date')
//     const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
//     const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
//     const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
//     albumReleaseDate.innerHTML = x + " " + y + ", " + z;





 
