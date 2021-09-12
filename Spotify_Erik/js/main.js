// PART 1 :

// fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
// .then(response => response.json())
// .then(data => {
//     loadData(data);
// })
 
// function loadData(data) {
    
//     const heading = document.getElementById('name');
//     heading.innerHTML = data.name + " " + data.lastName;

//     const albumName = document.getElementById('song_name');
//     albumName.innerHTML = data.music.latest.name;
 
//     const albumReleaseDate = document.getElementById('date')
//     const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
//     const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
//     const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
//     albumReleaseDate.innerHTML = x + " " + y + ", " + z;

//     const albumImage = document.getElementById('latest_img')
//     albumImage.setAttribute('src', data.music.latest.image)
 
// }

// Part 2:

fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/')
  .then(response => response.json())
  .then(data => {
    const randomArtist = rngArtist(data);
    console.log(randomArtist);
    fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist}`)
    .then(response => response.json())
    .then(data => {
        loadData(data);
    })
    function rngArtist(data) {
        return Math.ceil(Math.random() * data.length)
    }
})

function loadData(data) {
    
    const heading = document.getElementById('name');
    heading.innerHTML = data.name + " " + data.lastName;

    const albumName = document.getElementById('song_name');
    albumName.innerHTML = data.music.latest.name;
 
    const albumReleaseDate = document.getElementById('date')
    const x = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {month:'short'});
    const y = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {day: 'numeric'});
    const z = new Date(Date.parse(data.music.latest.releaseDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
    
    albumReleaseDate.innerHTML = x + " " + y + ", " + z;

    const albumImage = document.getElementById('latest_img')
    albumImage.setAttribute('src', data.music.latest.image)
 
}