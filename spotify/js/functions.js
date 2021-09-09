function loadData(data) {
    

    const heading = document.getElementById('artistName');
    heading.innerHTML = data.name + " " + data.lastName;

    const albumImage = document.getElementById('listLatestRelease_image')
    albumImage.setAttribute('src', data.music.latest.image)

    const albumName = document.getElementById('albumName');
    albumName.innerHTML = data.music.latest.name;

    const albumReleaseDate = document.getElementById('releaseDate')
    const day = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
    const month = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
    const year = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
    albumReleaseDate.innerHTML = day + " " + month + ", " + year;


}

function chooseRandomArtist(data) {
    return getRandomInt(data.length);
}

function getRandomInt(max) {
    return Math.ceil(Math.random() * max)
}



function createTable(data) {
   
    const wrapper = document.createElement('article')
    const x = document.getElementById('listPopular')
    x.appendChild(wrapper)
    wrapper.setAttribute('class', 'listPopular_row')

    const leftPartWrapper = document.createElement('div')
    wrapper.appendChild(leftPartWrapper)
    leftPartWrapper.setAttribute('class', 'listPopular_row_wrapper--left')
    leftPartWrapper.setAttribute('id', `id${data.id}`)

    const imageWrapper = document.createElement('div')
    imageWrapper.setAttribute('class', 'list_imageWrapper')
    leftPartWrapper.appendChild(imageWrapper)


    const albumImage = document.createElement('img');
    albumImage.setAttribute('src', data.image)
    albumImage.setAttribute('class', 'listImage')
    imageWrapper.appendChild(albumImage)

    const playIcon = document.createElement('i');
    playIcon.setAttribute('class', 'fas fa-play')
    playIcon.setAttribute('id', `playButton${data.id}`)
    leftPartWrapper.appendChild(playIcon)

    const songName = document.createElement('p');
    songName.setAttribute('class', 'songName')
    leftPartWrapper.appendChild(songName)
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

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
}

const array = [];
function addMusic(data) {
    const audio = new Audio(`music/song-${data.id}.mp3`)  
    
    let a = {
        audio: audio, 
        paused: () => {
            if (audio.paused === true) {
                return true;
            } else {
                return false;
            }
        },
        createdAt: data.createdAt,
        name: data.name,
        image: data.image,
        listeners: data.listeners,
        duration: data.durationInMs,
        tag: data.tag,
        id: data.id,
        artistId: data.artistId,
    }
    console.log(a.paused);
    array.push(a);
    const play = document.getElementById(`id${data.id}`)
   
    play.addEventListener('click', () => renderAudio(audio, data.id))
}

function renderAudio(audio, a) {
    if (audio.paused === true) {
    audio.play();
    const x = document.getElementById(`playButton${a}`)
    x.setAttribute('class', 'fas fa-pause')
    } else {
        audio.pause();
        audio.src = audio.src;
        const x = document.getElementById(`playButton${a}`)
        x.setAttribute('class', 'fas fa-play')
    }
}

console.log(array);
   

export { loadData }
export { chooseRandomArtist }
export { createTable }
export { addMusic }

