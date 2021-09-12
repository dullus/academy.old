import { clickEffect, hoverSongActive, hoverSongOut } from "./styleEffect.js";

function play(id, audio) {
    const index = collection.findIndex((obj => obj.id === id));
    if (!collection[index].isPlaying) {
        audio.play();
        collection[index].isPlaying = true;
    }
    else {
        audio.pause();
        collection[index].isPlaying = false;
    }
    clickEffect(collection[index].element, collection[index].id, collection[index].isPlaying)
}

const collection = [];

function createMusicCollection(id, createdDate) {
    const isPlaying = false;
    const isPaused = false;
    const audio = new Audio(`assets/music/song-${id}.mp3`);
    const element = document.getElementById(id);
    audio.setAttribute("id", `songID${id}`);
    collection.push({ element, id, audio, isPlaying, createdDate });
    setTimeout(() => {
        element.addEventListener('click', () => {
            play(id, audio);
            changePlaying(id)
        })
        hoverChange(id);
    }, 200);
}

function hoverChange(id) {
    const index = collection.findIndex((obj => obj.id === id));
    collection[index].element.addEventListener('mouseover', () => {
        collection.forEach(el => {
            if (el.id === id) {
                if (!el.isPlaying) {
                    hoverSongActive(el.element, el.id, el.createdDate)
                }
            }
        })
    })
    collection[index].element.addEventListener('mouseout', () => {
        collection.forEach(el => {
            if (el.id === id) {
                if (!el.isPlaying) {
                    hoverSongOut(el.element, el.id, el.createdDate)
                }
            }
        })
    })
}

function changePlaying(id) {
    collection.forEach(el => {
        if (el.id !== id) {
            el.audio.src = el.audio.src;
            el.isPlaying = false;
            hoverSongOut(el.element, el.id)
        }
    })
}

const randomIndexes = [];

const playIcon = document.getElementById('playButton');
function randomSongs() {
    collection.forEach(() => {
        let randomIndex = Math.floor(Math.random() * collection.length);
        while (randomIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * collection.length);
        }
        randomIndexes.push(randomIndex);
    });
};

playIcon.addEventListener('click', () => {
    randomSongs();
    randomIndexes.forEach(el => {
        setTimeout(() => {
            play(collection[el].id, collection[el].audio);
            changePlaying(collection[el].id)
        }, collection[el].audio.duration * 1000);
    })
})

export { play, createMusicCollection };