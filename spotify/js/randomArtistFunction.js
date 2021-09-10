
function showRandomArtistInfo (data){
    let element = document.getElementById('artist-name');
    element.innerText = data.name + ' ' +data.lastName;
    
    element = document.querySelector('.main-artist-latest-release > div > img');
    element.src="http://placeimg.com/640/480";
    element.alt="songImage";
    element.width="40px";
    element.height="40px";
    
    document.querySelector('.main-artist-latest-release  div > p:nth-child(1)').innerHTML = data.music.latest.name;
    document.querySelector('.main-artist-latest-release  div > p:nth-child(2)').setAttribute('id','releaseDate')
    document.querySelector('.main-artist-latest-release  div > p:nth-child(2)').innerHTML =  data.music.latest.releaseDate.substring(8,10)+'.'+data.music.latest.releaseDate.substring(5,7)+'.'+data.music.latest.releaseDate.substring(0,4) ;

    const releaseDate = document.getElementById('releaseDate')
    const day = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
    const month = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
    const year = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    releaseDate.innerHTML = day + " " + month + ", " + year;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  export {showRandomArtistInfo,getRandomInt}