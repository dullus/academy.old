import { getRandomInt } from "./randomArtistFunction.js";


function showPopularSongs(data, url){
    fetch(`${url}/${getRandomInt(data.length)+1}/popular`)
        .then(response => response.json())
        .then(function (data)  {
            console.log(array)
            data.forEach(element =>{
                inputSongs(element)
                
            })
                 
    });
}
 
function inputSongs (element){
    // console.log(element)
    const elementUl = document.getElementById('main-list-artist-popular-songs');
        elementUl.style.overflowX = 'hidden';
        elementUl.style.overflowY = 'scroll';

        let elementLi = document.createElement('li');
        elementLi.setAttribute( 'class', "artist-popular-song")
        elementLi.setAttribute( 'id', element.id)
        
        
        let subElementLi = document.createElement('img');
        subElementLi.setAttribute('src',element.image);
        subElementLi.setAttribute('alt',element.name);
        elementLi.appendChild(subElementLi);

        subElementLi = document.createElement('div');
        subElementLi.setAttribute('class','pause-play-button');
        elementLi.appendChild(subElementLi);

        let subSubElementLi = document.createElement('i');
        subSubElementLi.setAttribute('class','fas fa-play');
        subSubElementLi.setAttribute('id',`play${element.id}`);
        subElementLi.appendChild(subSubElementLi);
        subSubElementLi = document.createElement('i');
        subSubElementLi.setAttribute('class','fas fa-pause');
        subSubElementLi.setAttribute('id',`pause${element.id}`);
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


        
        addSong(element);
        
        
               
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

let array = [];

function addSong(element){
    const isPlaying = false;
    const audio = new Audio(`./music/song-${element.id}.mp3`);
    audio.setAttribute('id',`song${element.id}`);
    const id = element.id
    array.push({id, isPlaying, audio});
    play(element,audio)
    
    
    

}

function play(element,audio){
    setTimeout(function(){ 
        const divko = document.getElementById(element.id);
        
        divko.addEventListener('click',()=>{
        array.forEach(e =>{
            if(e.id == element.id){
                
                if(e.isPlaying==false){
                    audio.play();
                    e.isPlaying=true;
                    
                    document.getElementById(`play${e.id}`).style.display = 'none';
                    document.getElementById(`pause${e.id}`).style.display = 'flex';
                   
                    
                }else{
                    audio.pause();
                    e.isPlaying=false;
                    
                    document.getElementById(`play${e.id}`).style.display = 'flex';
                    document.getElementById(`pause${e.id}`).style.display = 'none';
                    
                }
                
            }else {
                e.audio.pause();
                e.audio.src = e.audio.src;
                e.isPlaying = false;
                document.getElementById(`play${e.id}`).style.display = 'none';
                document.getElementById(`pause${e.id}`).style.display = 'none';
            }
        })


        
        console.log(array)   
        

    }, 1);})
}



export {showPopularSongs}