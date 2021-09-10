
const url = 'https://613622df8700c50017ef5455.mockapi.io/api/v1/artist'


fetch(url)
  .then(response => response.json())
  .then(function (data)  {
      
        randomArtistInfo(data[getRandomInt(data.length)]);
        popularSongs(data);
        

  });



function createTodoTitle(title) {
    const titleElement = document.createElement('p')
    titleElement.innerHTML = title

    return titleElement;
}

function popularSongs(data){
    fetch(`${url}/${getRandomInt(data.length)+1}/popular`)
        .then(response => response.json())
        .then(function (data)  {
            console.log(data);
            data.forEach(element =>{
                inputSongs(element)
                
            })
            

            
    });
}
 
function inputSongs (element){
    console.log(element)
    const elementUl = document.getElementById('main-list-artist-popular-songs');
        elementUl.style.overflowX = 'hidden';
        elementUl.style.overflowY = 'scroll';

        let elementLi = document.createElement('li');
        elementLi.setAttribute( 'class', "artist-popular-song")
        console.log(elementLi)
        
        let subElementLi = document.createElement('img');
        subElementLi.setAttribute('src',element.image);
        subElementLi.setAttribute('alt',element.name);
        elementLi.appendChild(subElementLi);

        subElementLi = document.createElement('div');
        subElementLi.setAttribute('class','pause-play-button');
        elementLi.appendChild(subElementLi);

        let subSubElementLi = document.createElement('i');
        subSubElementLi.setAttribute('class','fas fa-play');
        subElementLi.appendChild(subSubElementLi);
        subSubElementLi = document.createElement('i');
        subSubElementLi.setAttribute('class','fas fa-pause');
        subElementLi.appendChild(subSubElementLi);
        elementLi.appendChild(subElementLi);

        subElementLi = document.createElement('p');
        subElementLi.setAttribute('class', 'art-pop-song-name');
        subElementLi.innerHTML = element.name;
        elementLi.appendChild(subElementLi);

        subElementLi = document.createElement('div');
        subElementLi.setAttribute('class','right-wraper-of-songs');
              
        subSubElementLi = document.createElement('div');
        subSubElementLi.setAttribute('class','explicit');
        subSubElementLi.innerHTML = 'EXPLICIT';
        subElementLi.appendChild(subSubElementLi);
       
        subSubElementLi = document.createElement('p');
        subSubElementLi.setAttribute('class','art-pop-song-time');
        subSubElementLi.innerHTML = timeFormating(element.durationInMs);
        subElementLi.appendChild(subSubElementLi);
       
        subSubElementLi = document.createElement('div');
        subSubElementLi.setAttribute('class','art-pop-song-views');
        subSubElementLi.innerHTML = element.listeners;
        subElementLi.appendChild(subSubElementLi);

        
        elementLi.appendChild(subElementLi);        
        elementUl.appendChild(elementLi);        
}

function timeFormating(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
}

function randomArtistInfo (data){
    let element = document.getElementById('artist-name');
    element.innerText = data.name + ' ' +data.lastName;
    
    element = document.querySelector('.main-artist-latest-release > div > img');
    element.src="http://placeimg.com/640/480";
    element.alt="songImage";
    element.width="40px";
    element.height="40px";
    
    document.querySelector('.main-artist-latest-release  div > p:nth-child(1)').innerHTML = data.music.latest.name;
    // const formatedDay = format(new Date(data.music.latest.releaseDate.str.substring(0,4),))
    document.querySelector('.main-artist-latest-release  div > p:nth-child(2)').innerHTML =  data.music.latest.releaseDate.substring(8,10)+'.'+data.music.latest.releaseDate.substring(5,7)+'.'+data.music.latest.releaseDate.substring(0,4) ;

}






function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }