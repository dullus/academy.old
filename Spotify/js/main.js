import createSong from "./createSong.js";
import setArtist from "./setArtist.js";
const artist_url = "https://613622df8700c50017ef5455.mockapi.io/api/v1/artist";


function randomArtistNumber(data) {
    return Math.floor(Math.random() * data.length)
}

fetch(artist_url)
    .then((resp) => resp.json())
    .then(function (data) {
        let randomArtist = randomArtistNumber(data);
        setArtist(data[randomArtist])
        fetch(`${artist_url}/${randomArtist + 1}/popular`)
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(element => {
                    createSong(element)
                })
            })
    })
