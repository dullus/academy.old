const artist_url = "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist";


function randomArtistNumber(data) {
    return Math.floor(Math.random() * data.length)
}

fetch(artist_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let randomArtist = randomArtistNumber(data);
        console.log(randomArtist)
        setArtist(data[randomArtist])
        fetch(`${artist_url}/${randomArtist + 1}/popular`)
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(element => {
                    createSong(element)
                })
            })
    })

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setArtist(element) {
    const h1 = document.getElementById("artistName");
    const latest = document.getElementById("latest");
    const albumBox = document.createElement("div");
    const albumImage = document.createElement("img");
    const songWrapper = document.createElement("div");
    const songName = document.createElement("div");
    const songRelease = document.createElement("div");
    const event = new Date(element.music.latest.releaseDate);

    albumBox.setAttribute("class", "albumBox");
    albumImage.setAttribute("class", "albumImage");
    albumImage.setAttribute("src", element.music.latest.image);
    songRelease.setAttribute("id", "songDate");
    h1.setAttribute("id", `artistId_${element.id}`)

    songName.innerHTML = element.music.latest.name;
    songRelease.innerHTML = `${months[event.getMonth()]} ${event.getDate()}, ${event.getFullYear()}`
    songRelease.toLocaleString('en-US');
    h1.innerHTML = element.name + " " + element.lastName;

    songWrapper.appendChild(songName);
    songWrapper.appendChild(songRelease);
    albumBox.appendChild(albumImage);
    albumBox.appendChild(songWrapper);
    latest.appendChild(albumBox);
}

function millisecondsToMinutesAndSeconds(milliseconds) {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function createSong(element) {
    const songs = document.getElementById('popular');
    const songDetail = document.createElement("div");
    const albumBox = document.createElement("div");
    const playPauseButton = document.createElement("div");
    const albumImage = document.createElement("img");
    const songInformation = document.createElement("div");
    const explicit = document.createElement("div");
    const duration = document.createElement("div");
    const view = document.createElement("div");
    const songName = document.createElement("div");
    const i = document.createElement("i");

    songs.style.overflow = 'auto';
    explicit.setAttribute("class", "explicit");
    songInformation.setAttribute("class", "songInformation");
    albumImage.setAttribute("class", "albumImage");
    albumImage.setAttribute("src", element.image);
    songDetail.setAttribute("id", element.id);
    playPauseButton.setAttribute("class", "playPauseButton");
    albumBox.setAttribute("class", "albumBox");
    songDetail.setAttribute("class", "songDetail");
    i.setAttribute("class", "fas fa-pause");

    const minutes = millisecondsToMinutesAndSeconds(element.durationInMs)
    explicit.innerHTML = "EXPLICIT";
    duration.innerHTML = minutes;
    view.innerHTML = element.listeners;
    songName.innerHTML = element.name;

    playPauseButton.appendChild(i);
    songInformation.appendChild(explicit);
    songInformation.appendChild(duration);
    songInformation.appendChild(view);
    songDetail.appendChild(albumBox);
    songDetail.appendChild(songInformation);
    albumBox.appendChild(albumImage);
    albumBox.appendChild(playPauseButton);
    albumBox.appendChild(songName);
    songs.appendChild(songDetail);
}