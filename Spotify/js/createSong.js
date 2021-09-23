import { createMusicCollection } from "./music.js";

function millisecondsToMinutesAndSeconds(milliseconds) {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function createSong(element) {
    const songs = document.getElementById('popular');
    const albumBox = `<div class="albumBox" id="${element.id}"><img class="albumImage" src="${element.image}"> <div id="iconWrapper${element.id}" class="playPauseButton"><i id="icon${element.id}"class="fas fa-play"></i></div> <div>${element.name}</div> </div>`
    const songInformation = `<div class="songInformation"> <div id="explicit${element.id}" class="explicit">${element.tag}</div> <div>${millisecondsToMinutesAndSeconds(element.durationInMs)}</div> <div>${element.listeners}</div> </div>`
    songs.style.overflow = 'auto';
    songs.innerHTML += `<div class="songDetail" id="songDetail${element.id}">${albumBox}${songInformation} </div}>`;
    setTimeout(() => {
        createMusicCollection(element.id, element.createdAt)
    }, 200);
}


export default createSong;