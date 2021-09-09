fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
.then(response => response.json())
.then(data => {
    loadData(data);
})


function loadData(data) {
    

    const heading = document.getElementById('artistName');
    heading.innerHTML = data.name + " " + data.lastName;

    const albumImage = document.getElementById('listLatestRelease_image')
    albumImage.setAttribute('src', data.music.latest.image)

    const albumName = document.getElementById('albumName');
    albumName.innerHTML = data.music.latest.name;

    const albumReleaseDate = document.getElementById('releaseDate')
    const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US');
    
    albumReleaseDate.innerHTML = x;

}


fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/')
.then(response => response.json())
.then(data => {
    const randomArtistId = chooseRandomArtist(data);
    fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtistId}/popular`)
    .then(response => response.json())
    .then(dataPopular => {
        dataPopular.forEach(createTable);
    })
})


function chooseRandomArtist(data) {
    return getRandomInt(data.length);
}

function getRandomInt(max) {
    return Math.ceil(Math.random() * max)
}


function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
    }

function createTable(data) {
   
    const wrapper = document.createElement('article')
    const x = document.getElementById('listPopular')
    x.appendChild(wrapper)
    wrapper.setAttribute('class', 'listPopular_row')

    const imageWrapper = document.createElement('div')
    imageWrapper.setAttribute('class', 'list_imageWrapper')
    wrapper.appendChild(imageWrapper)


    const albumImage = document.createElement('img');
    albumImage.setAttribute('src', data.image)
    albumImage.setAttribute('class', 'listImage')
    imageWrapper.appendChild(albumImage)

    const playIcon = document.createElement('i');
    playIcon.setAttribute('class', 'fas fa-play')
    playIcon.setAttribute('id', 'iconPlay')
    wrapper.appendChild(playIcon)

    
    const songId = data.id;
    console.log(songId);
    const audio = new Audio(`music/song-${songId}.mp3`)   
    playIcon.addEventListener('click', () => audio.play())



    const songName = document.createElement('p');
    songName.setAttribute('class', 'songName')
    wrapper.appendChild(songName)
    songName.innerHTML = data.name;

    const songLength = document.createElement('p');
    songLength.setAttribute('class', 'tableItem')
    wrapper.appendChild(songLength)
    songLength.innerHTML = millisToMinutesAndSeconds(data.durationInMs);

    const listeners = document.createElement('p');
    listeners.setAttribute('id', 'tableItem--number')
    wrapper.appendChild(listeners)
    listeners.innerHTML = data.listeners.toLocaleString('en-US');

    
}




