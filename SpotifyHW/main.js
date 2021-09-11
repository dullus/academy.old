fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/')
  .then(response => response.json())
  .then(data => {
    const randomArtist = generateRandomArtist(data);
    console.log(randomArtist);
    fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist}`)
    .then(response => response.json())
    .then (data => {
      artist(data);
      fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist}/popular`)
      .then(response => response.json())
      .then (dataPopular => 
        dataPopular.forEach(artistPopular)
        
    )})
})




function generateRandomArtist(data) {
      return Math.ceil(Math.random() * data.length)
  }

function artist(data){
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
  latestReleaseDate.innerHTML = x + " " + y + "," + z; 
}  

function artistPopular(dataPopular){
  const song = document.createElement("div")
  song.setAttribute('class', 'song')
  document.getElementById('scrollSong').appendChild(song)

  const toolTip = document.createElement("div")
  const x = new Date(Date.parse(dataPopular.createdAt)).toLocaleDateString('en-US', {month:'short'});
  const y = new Date(Date.parse(dataPopular.createdAt)).toLocaleDateString('en-US', {day: 'numeric'});
  const z = new Date(Date.parse(dataPopular.createdAt)).toLocaleDateString('en-US', {year: 'numeric'});
  toolTip.innerHTML = "Song was created at: " + x + " " + y + "," + z; 
  toolTip.setAttribute('class', 'toolTip')
  song.appendChild(toolTip)
  
  const leftSongSection = document.createElement("div")
  song.appendChild(leftSongSection)
  leftSongSection.setAttribute('class', 'leftSongSection')

  const rightSongSection = document.createElement("div")
  song.appendChild(rightSongSection)
  rightSongSection.setAttribute('class', 'rightSongSection')

  const songPic = document.createElement("img")
  leftSongSection.appendChild(songPic)
  songPic.setAttribute('src', dataPopular.image)
  songPic.setAttribute('class', 'songPic')

  const songPlayButton = document.createElement("i")
  leftSongSection.appendChild(songPlayButton)
  songPlayButton.setAttribute('class','songPlayButt')

  const songName = document.createElement("div")
  leftSongSection.appendChild(songName)
  songName.innerHTML =  dataPopular.name
  songName.setAttribute('class', 'songText')
  
  const songDuration = document.createElement("div")
  rightSongSection.appendChild(songDuration)
  songDuration.innerHTML = timeFormatting(dataPopular.durationInMs)
  songDuration.setAttribute('class', 'songLength')

  const songListeners = document.createElement("div")
  rightSongSection.appendChild(songListeners)
  songListeners.innerHTML = dataPopular.listeners
  songListeners.setAttribute('class', 'songListens')
}

function timeFormatting(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
}