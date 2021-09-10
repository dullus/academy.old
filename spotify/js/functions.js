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
    const x = document.getElementById('listPopular')
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
    const isPlaying = false;
 
    array.push({id,audio,isPlaying});

    const play = document.getElementById(`id${data.id}`)
    play.addEventListener('click',  () => renderAudio(data.id, array))
    
    
}
console.log(array)


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
     else if (el.audio.paused === false) {
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

   

export { loadData }
export { chooseRandomArtist }
export { createTable }
export { addMusic }

