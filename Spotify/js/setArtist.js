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

export default setArtist;