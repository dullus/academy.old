// PART 1 :

// fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
// .then(response => response.json())
// .then(data => {
//     loadData(data);
// })
 
// function loadData(data) {
    
//     const heading = document.getElementById('name');
//     heading.innerHTML = data.name + " " + data.lastName;

//     const albumName = document.getElementById('song_name');
//     albumName.innerHTML = data.music.latest.name;
 
//     const albumReleaseDate = document.getElementById('date')
//     const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
//     const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
//     const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
//     albumReleaseDate.innerHTML = x + " " + y + ", " + z;

//     const albumImage = document.getElementById('latest_img')
//     albumImage.setAttribute('src', data.music.latest.image)
 
// }

// Part 2:

fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/')
  .then(response => response.json())
  .then(data => {
    const randomArtist = rngArtist(data);
    console.log(randomArtist);
    fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist}`)
    .then(response => response.json())
    .then(data => {
        loadData(data);
        fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist}/popular`)
        .then(response => response.json())
        .then (dataArtistPopular => 
          dataArtistPopular.forEach(artistPopularData)
         
      )})
    function rngArtist(data) {
        return Math.ceil(Math.random() * data.length)
    }
})

function loadData(data) {
    
    const heading = document.getElementById('name');
    heading.innerHTML = data.name + " " + data.lastName;

    const albumName = document.getElementById('song_name');
    albumName.innerHTML = data.music.latest.name;
 
    const albumReleaseDate = document.getElementById('date')
    const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
    const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
    const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
    albumReleaseDate.innerHTML = x + " " + y + ", " + z;

    const albumImage = document.getElementById('latest_img')
    albumImage.setAttribute('src', data.music.latest.image)
 
}
function artistPopularData(dataArtistPopular){
    
    
    console.log(dataArtistPopular.albumImage)
    const track = document.createElement("div")
    track.setAttribute('class', 'track')
    document.getElementById('all_tracks').appendChild(track)

    const trackImg = document.createElement("div")
    trackImg.setAttribute('class', 'track_img')
    track.appendChild(trackImg)

    const album = document.createElement("img")
    trackImg.appendChild(album)    
    album.setAttribute('src', dataArtistPopular.image)
    album.setAttribute('class', 'album')

    const songName = document.createElement("div")
    songName.setAttribute('class', 'track_title')
    track.appendChild(songName)
    songName.innerHTML = dataArtistPopular.name

    const explicit = document.createElement("div")
    track.appendChild(explicit)
    explicit.setAttribute('class', 'explicit')
    explicit.innerHTML = "EXPLICIT"

    const length = document.createElement("div")
    track.appendChild(length)
    length.setAttribute('class', 'length')
    length.innerHTML = timeTransform(dataArtistPopular.durationInMs)

    const trackPlays = document.createElement("div")
    track.appendChild(trackPlays)
    trackPlays.setAttribute('class', 'track_plays')
    trackPlays.innerHTML = dataArtistPopular.listeners

  }

  function timeTransform(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
}