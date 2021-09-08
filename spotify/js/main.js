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
        console.log(dataPopular)
       
    })
})


function chooseRandomArtist(data) {
    return getRandomInt(data.length);
}

function getRandomInt(max) {
    return Math.ceil(Math.random() * max)
}

