const artist_url = "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist";

const randomArtist = Math.floor(Math.random() * 3);
fetch(artist_url)
    .then((resp) => resp.json())
    .then(function (data) {
        setArtist(data[randomArtist])
    })
// fetch(`${artist_url}/${randomArtist}/popular`)
//     .then((resp) => resp.json())
//     .then(function (data) {
//         data.forEach(element => {
//             createSong(element)
//         })
//     })

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


// function createSong(element) {
//     console.log(element)
//     const songs = document.getElementById('popular');
//     const songDetail = document.createElement("div");
//     const albumBox = document.createElement("div");
//     const playPauseButton = document.createElement("div");
//     const albumImage = document.createElement("img");
//     const songInformation = document.createElement("div");
//     const explicit = document.createElement("div");
//     const duration = document.createElement("div");
//     const view = document.createElement("div");
//     const songName = document.createElement("div");
//     const i = document.createElement("i");

//     explicit.setAttribute("class", "explicit");
//     songInformation.setAttribute("class", "songInformation");
//     albumImage.setAttribute("class", "albumImage");
//     albumImage.setAttribute("src", element.image);
//     songDetail.setAttribute("id", element.id);
//     playPauseButton.setAttribute("class", "playPauseButton");
//     albumBox.setAttribute("class", "albumBox");
//     songDetail.setAttribute("class", "songDetail");
//     i.setAttribute("class", "fas fa-pause");
//     // songName.innerHTML = element.name + " " + element.lastName;
//     explicit.innerHTML = "EXPLICIT";
//     duration.innerHTML = "4:00";
//     view.innerHTML = "1,000,000";

//     playPauseButton.appendChild(i);
//     songInformation.appendChild(explicit);
//     songInformation.appendChild(duration);
//     songInformation.appendChild(view);
//     songDetail.appendChild(albumBox);
//     songDetail.appendChild(songInformation);
//     albumBox.appendChild(albumImage);
//     albumBox.appendChild(playPauseButton);
//     albumBox.appendChild(songName);
//     songs.appendChild(songDetail);

// }