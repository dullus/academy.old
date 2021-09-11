function loadData(data) {
    

    const heading = document.getElementById('artistName');
    heading.innerHTML = data.name + " " + data.lastName;

    const albumImage = document.getElementById('listLatestRelease_image')
    albumImage.setAttribute('src', data.music.latest.image)

    const albumName = document.getElementById('albumName');
    albumName.innerHTML = data.music.latest.name;

    const albumReleaseDate = document.getElementById('releaseDate')
    const formattedDate = formatDate(data.music.latest.releaseDate)
    albumReleaseDate.innerHTML = formattedDate;
}

function chooseRandomArtist(data) {
    return Math.ceil(Math.random() * data.length);
}


function createTable(data) {
   
    const wrapper = document.createElement('article')
    const x = document.getElementById('songsWrapper')
    x.appendChild(wrapper)
    wrapper.setAttribute('class', 'listPopular_row')
    wrapper.setAttribute('id', `listPopular_row${data.id}`)

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
    songName.setAttribute('class', 'songName tooltip')
    leftPartWrapper.appendChild(songName)
    songName.innerHTML = data.name;

    const tooltip = document.createElement('div')
    tooltip.setAttribute('class', 'tooltiptext')
    songName.appendChild(tooltip);
    const date = formatDate(data.createdAt)
    tooltip.innerHTML = `Song was created on ${date}`

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
    const id = data.id;
    const isNotPlaying = audio.paused;
    const artistID = data.artistId
 
    array.push({id,audio, artistID, isNotPlaying});

    const play = document.getElementById(`id${data.id}`)
    play.addEventListener('click',  () => renderAudio(data.id, array))  
  

}

console.log(array)
document.getElementById('rightSection_main_button--flex').addEventListener('click', () => a(shuffleMusic(array)))


function renderAudio(id, array) {
    array.forEach(el =>{
        
        if(el.id === id ){
            if (el.audio.paused === true) {
            el.audio.play();
            const x = document.getElementById(`playButton${el.id}`)
            x.setAttribute('class', 'fas fa-pause')

            const popularRow = document.getElementById(`listPopular_row${id}`)
            popularRow.setAttribute('class', 'listPopular_row playing')
        } 
     else {
            el.audio.pause();
            const x = document.getElementById(`playButton${el.id}`)
            x.setAttribute('class', 'fas fa-play')
 
            const popularRow = document.getElementById(`listPopular_row${id}`)
            popularRow.setAttribute('class', 'listPopular_row playing')  
        }
    }
        else {                                                                   //id = API song ID
                                                                                 //el.id = song ID from array
            el.audio.src = el.audio.src;
            const x = document.getElementById(`playButton${el.id}`)
            x.setAttribute('class', 'fas fa-play')
        };     
    })
}

function formatDate(stringDate) {
    const day = new Date(Date.parse(stringDate)).toLocaleDateString('en-US', {month:'short'});
    const month = new Date(Date.parse(stringDate)).toLocaleDateString('en-US', {day: 'numeric'});
    const year = new Date(Date.parse(stringDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
    return day + " " + month + ", " + year;
}

   

function shuffleMusic(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
     
    }   
    return array;
}

function a(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].audio.paused === true) {
            const x = document.getElementById(`iconPlay`)
            x.setAttribute('class', 'fas fa-pause')
        
            array[0].audio.play();
        }
    }

    // let index = 0;
    // array[index].audio.play()    
    
    // for (let i = 0; i < array.length; i++) {
        
    // array[index].audio.onended = () => {array[index + 1].audio.play()}
    // console.log(array)
}


function p(soundArray) {
    soundArray[0].audio.play();
    soundArray.forEach(function(element, index, array) 
    {if (soundArray[index + 1]) {
        soundArray[index].audio.addEventListener('ended', () => (function() {
            soundArray[index + 1].audio.play();}, this));      }    });
        }
export { loadData }
export { chooseRandomArtist }
export { createTable }
export { addMusic }

