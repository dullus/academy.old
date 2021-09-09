//Task part [1] - dynamicly update auhor name and latest section

const headerName = document.getElementsByClassName("section__main-headline")[0];
const latestImg = document.getElementById("latest_releases-container-img");
const latestName = document.getElementById("latest_releases-container-p");
const latestDate = document.getElementById("latest_releases_container_date");
const popularContainer = document.getElementById("popular-container");
const relativeMusicPath = "./assets/music/";

const popularSongsOfRandomArtist = [];
const artistInfno = () => {
  fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1`)
    .then((res) => res.json())
    .then((data) => {
      headerName.textContent = fullname(data.name, data.lastName);
      latestImg.src = data.music.latest.image;
      latestName.textContent = data.music.latest.name;
      latestDate.textContent = dateFormat(data.music.latest.releaseDate);
    });
};
// artistInfno();   execution of part [1]

//Task part[2]
// First section: randomly update author name and latest section

//* get randomUser cause ID start at 1 (min allways 1) *//
function getRandomArtist(max) {
  min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min));
}
const artistData = fetch(
  `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/`
)
  .then((res) => res.json())
  .then((data) => {
    const randomArtist = data[getRandomArtist(data.length)];
    return fetch(
      `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist.id}`
    );
  })
  .then((response) => response.json())
  .then((randomArtist) => {
    console.log(randomArtist.id);
    headerName.textContent = fullname(randomArtist.name, randomArtist.lastName);
    latestImg.src = randomArtist.music.latest.image;
    latestName.textContent = randomArtist.music.latest.name;
    latestDate.textContent = dateFormat(randomArtist.music.latest.releaseDate);
    return fetch(
      `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist.id}/popular`
    );
  })
  .then((res) => res.json())
  .then((data) => {
    popularContainer.innerHTML = data
      .map((song) => {
        return `<div id="popular-item" class="popular-item">
              <div class="popular_item-left">
                <img src="${song.image}" alt="songX" />
                <i id="popular_item-pause" class="fas fa-pause"></i>
                <p id="popular_item-name">${song.name}</p>
              </div>
              <div class="popular_item-right">
                <button id="popular_item_right-button">Explicit</button>
                <p id="popular__item_right-p">${song.durationInMs}</p>
                <p id="popular__item_right-p-second">${song.listeners}</p>
              </div>
            </div>`;
      })
      .join("");
  })
  .catch((err) => {
    console.log(err);
  });

const fullname = (name, surname) => {
  return name + " " + surname;
};

const dateFormat = (date) => {
  const myDate = new Date(date);
  const month = myDate.toUTCString().slice(8, 11);
  const day = myDate.getDate();
  const year = myDate.getFullYear();
  return month + " " + day + " " + year;
};
