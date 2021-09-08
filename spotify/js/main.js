fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
.then(response => response.json())
.then(data => {
    loadData(data);
})


function loadData(data) {
    

    const heading = document.getElementById('artistName');
    heading.innerHTML = data.name + " " + data.lastName;

    const albumImage = document.getElementById('listImage--margin')
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


function createTable(data) {
   
    const wrapper = document.createElement('article')
    const x = document.getElementById('listPopular')
    x.appendChild(wrapper)
    wrapper.setAttribute('class', 'listPopular_row')

    const albumImage = document.createElement('img');
    albumImage.setAttribute('src', data.image)
    albumImage.setAttribute('class', 'listImage')
    wrapper.appendChild(albumImage)

    const songName = document.createElement('p');
    songName.setAttribute('class', 'songName')
    wrapper.appendChild(songName)
    songName.innerHTML = data.name;

    const songLength = document.createElement('p');
    songLength.setAttribute('class', 'tableItem')
    wrapper.appendChild(songLength)
    songLength.innerHTML = data.durationInMs;

    const listeners = document.createElement('p');
    listeners.setAttribute('id', 'tableItem--number')
    wrapper.appendChild(listeners)
    listeners.innerHTML = data.listeners;


}

const y = document.getElementById('listPopular');
y.style.height = '250px'
y.style.overflow = 'overlay'