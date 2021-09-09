fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
  .then(response => response.json())
  .then(data => {

    const artistName = document.getElementById("nameOfArtist")
  artistName.innerHTML = data.name + ' ' + data.lastName

  const latestReleaseAlbum = document.getElementById("sm2")
  latestReleaseAlbum.setAttribute ( 'src' , data.music.latest.image)

  const latestReleaseName = document.getElementById("nameOfLR")
  latestReleaseName.innerHTML = data.music.latest.name

  const latestReleaseDate = document.getElementById("dateOfLR")
  const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
  const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
  const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
    albumReleaseDate.innerHTML = x + " " + y + "," + z;
});


