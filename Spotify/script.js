const headerName = document.getElementsByClassName("section__main-headline")[0];
const latestImg = document.getElementById("latest_releases-container-img");
const latestName = document.getElementById("latest_releases-container-p");
const latestDate = document.getElementById("latest_releases_container_date");
const popularContainer = document.getElementById("popular-container");
const mainPlayButton = document.getElementById("section__main__buttons-play");
const mainPlayButtonIcon = document.getElementById(
  "section__main__buttons-play-i"
);
const relativeMusicPath = "./assets/music/";
let popularPlayButtons = document.getElementsByClassName("fas fa-play");

let audioElm = new Audio("");
let popularSongsOfRandomArtist = [];
let randomPopularSongsOfRandomArtist = [];
let currentPlayedIndex = 0;
let iscurrentlyPlaying = false;
let currentPlayingSongId = null;

const generateSongHtml = (iscurrentlyPlaying, song) => {
  return `<div id="popular-item" class="popular-item">
                <div class="popular_item-left" >
                <img src="${song.image}" alt="songX" />
                <i class="fas fa-play" id="${song.id}"></i>
               
  <span class="tooltiptext">Song was created on${dateFormat(
    song.createdAt
  )}</span>
                <p id="popular_item-name"${
                  iscurrentlyPlaying ? 'class="red" ' : ""
                }>${song.name}</p>
              </div>
              <div class="popular_item-right">
                <button id="popular_item_right-button">Explicit</button>
                <p id="popular__item_right-p">${timeFormating(
                  song.durationInMs
                )}</p>
                <p id="popular__item_right-p-second">${song.listeners.toLocaleString()}</p>
              </div>
            </div>`;
};
//!!!!!! Task part [1] - dynamicly update auhor name and latest section !!

// const artistInfno = () => {
//   fetch(`https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/1`)
//     .then((res) => res.json())
//     .then((data) => {
//       headerName.textContent = fullname(data.name, data.lastName);
//       latestImg.src = data.music.latest.image;
//       latestName.textContent = data.music.latest.name;
//       latestDate.textContent = dateFormat(data.music.latest.releaseDate);
//     });
// };
// artistInfno();   execution of part [1]

//Task part[3]
// First section: randomly update author name and latest section

function getRandomNumber(max) {
  min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}
function timeFormating(ms) {
  let minutes = Math.floor(ms / 60000);
  let seconds = ((ms % 60000) / 1000).toFixed(0);
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

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
const artistData = fetch(
  `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/`
)
  .then((res) => res.json())
  .then((data) => {
    const randomArtist = data[getRandomNumber(data.length)];

    return fetch(
      `https://613622df8700c50017ef5455.mockapi.io/api/v1/artist/${randomArtist.id}`
    );
  })
  .then((response) => response.json())
  .then((randomArtist) => {
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
    popularSongsOfRandomArtist = data.map((elm) => {
      return {
        ...elm,
        path: `${relativeMusicPath}song-${elm.id}.mp3`,
      };
    });
    popularContainer.innerHTML = popularSongsOfRandomArtist
      .map((song) => {
        return generateSongHtml(iscurrentlyPlaying, song);
      })
      .join("");

    for (const elm of popularPlayButtons) {
      elm.addEventListener("click", () => playPopularSong(elm));
    }
  })
  .catch((err) => {
    console.log(err);
  });

//Task part[2]
// Second section: update popular with songs

//Task part [2] and [3]

const playRandomSongs = () => {
  if (iscurrentlyPlaying) {
    mainPlayButtonIcon.setAttribute("class", "fas fa-play");
    audioElm.pause();
    iscurrentlyPlaying = false;
    currentPlayingSongId = null;
  } else {
    randomPopularSongsOfRandomArtist = [...popularSongsOfRandomArtist].sort(
      () => Math.random() - 0.5
    );
    mainPlayButtonIcon.setAttribute("class", "fas fa-pause");
    currentPlayedIndex = 0;
    const song = randomPopularSongsOfRandomArtist[currentPlayedIndex];
    audioElm.src = song.path;
    if (currentPlayingSongId !== null) {
      const previousSongElm = document.getElementById(currentPlayingSongId);
      previousSongElm.setAttribute("class", "fas fa-play");
    }
    const newSongElm = document.getElementById(song.id);
    newSongElm.setAttribute("class", "fas fa-pause");
    iscurrentlyPlaying = true;
    currentPlayingSongId = song.id;
    audioElm.load();
    audioElm.play();
  }
};
audioElm.addEventListener("ended", (event) => {
  currentPlayedIndex++;
  if (currentPlayedIndex !== randomPopularSongsOfRandomArtist.length) {
    audioElm.src = randomPopularSongsOfRandomArtist[currentPlayedIndex].path;
    audioElm.load();
    audioElm.play();
  }
});
const playPopularSong = (elm) => {
  const idOfHtmlElm = elm.getAttribute("id");
  const changeClass = document.getElementById(idOfHtmlElm);
  // if there is playing song - pause it
  if (iscurrentlyPlaying) {
    iscurrentlyPlaying = false;
    changeClass.setAttribute("class", "fas fa-play");
    audioElm.pause();
    // if teher is not playing song - play song
  } else {
    iscurrentlyPlaying = true;
    const currentSong = popularSongsOfRandomArtist.find((obj) => {
      if (obj.id === idOfHtmlElm) {
        return obj;
      }
    });
    const curentTime = audioElm.currentTime;
    // if clicked song is different from last played - play new song
    if (currentSong.id !== currentPlayingSongId) {
      audioElm.src = currentSong.path;
      audioElm.load();
      // if clicked song is same as last played - resume song
    } else {
      audioElm.src = audioElm.currentSrc;
      audioElm.load();
    }

    currentPlayingSongId = elm.id;
    audioElm.currentTime = curentTime;
    audioElm.play();
    changeClass.setAttribute("class", "fas fa-pause");
  }
};

mainPlayButton.addEventListener("click", playRandomSongs);
