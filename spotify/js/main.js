import { loadData, chooseRandomArtist, addMusic, createTable } from "./functions.js"




fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1')
.then(response => response.json())
.then(data => {
    loadData(data);
})


fetch('https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/')
.then(response => response.json())
.then(data => {
    const randomArtistId = chooseRandomArtist(data);
    fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtistId}/popular`)
    .then(response => response.json())
    .then(dataPopular => {
        dataPopular.forEach(createTable);
        dataPopular.forEach(addMusic);
    })
})




