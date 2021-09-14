import { getRandomInt } from "./randomArtistFunction.js";


function showPopularSongs( url, randomInt){
    fetch(`${url}/${randomInt+1}/popular`)
        .then(response => response.json())
        .then(function (data)  {
            // console.log(array)
            data.forEach(element =>{
                inputSongs(element)
                
            })
                 
    });
    console.log(array)
    return array;
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
        subElementLi.setAttribute('class', 'tooltip');
        subSubElementLi = document.createElement('span');
        subSubElementLi.setAttribute('id',`tooltip${element.id}`);
        subSubElementLi.setAttribute('class',`tooltiptext`);
        let createdAtDate = element.createdAt.substring(8,10)+'.'+element.createdAt.substring(5,7)+'.'+element.createdAt.substring(0,4)
        const day = new Date(Date.parse(createdAtDate)).toLocaleDateString('en-US', {month:'short'});
        const month = new Date(Date.parse(createdAtDate)).toLocaleDateString('en-US', {day: 'numeric'});
        const year = new Date(Date.parse(createdAtDate)).toLocaleDateString('en-US', {year: 'numeric'}); 
        createdAtDate = day + " " + month + ", " + year;
        releaseDate.innerHTML = day + " " + month + ", " + year;
        subSubElementLi.innerHTML = `Song was created on ${createdAtDate}`
        subElementLi.appendChild(subSubElementLi);

        elementLi.appendChild(subElementLi);


        subElementLi = document.createElement('div');
        subElementLi.setAttribute('class','right-wraper-of-songs');
              
        subSubElementLi = document.createElement('div');
        subSubElementLi.setAttribute('class','explicit');
        subSubElementLi.setAttribute('id',`explicit${element.id}`)
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
    const isPaused = false;
    const createdAt = element.createdAt
    const audio = new Audio(`./music/song-${element.id}.mp3`);
    audio.setAttribute('id',`song${element.id}`);
    const id = element.id;
    array.push({id, isPlaying, audio,isPaused,createdAt});
    songsHover(element);
    play(element);
    
    
    
    

}

function songsHover(element){
    setTimeout(function(){ 
        const divko = document.getElementById(element.id);
        
        divko.addEventListener('mouseover',()=>{
        array.forEach(e =>{
            if(e.id == element.id){
                
                if(e.isPlaying==false){
                    document.getElementById(`tooltip${e.id}`).style.visibility = 'visible';
                    document.getElementById(`play${e.id}`).style.display = 'flex';
                    document.getElementById(`pause${e.id}`).style.display = 'none';
                    document.getElementById(`${e.id}`).setAttribute('class','artist-popular-song songHoverColor');
                    document.getElementById(`explicit${e.id}`).setAttribute('class','explicit explicitHoverColor');
                    
                }
                else {
                    document.getElementById(`tooltip${e.id}`).style.visibility = 'visible';
                   
                }
            }else {
                if(e.isPlaying==false){
                document.getElementById(`play${e.id}`).style.display = 'none';
                document.getElementById(`pause${e.id}`).style.display = 'none';
                document.getElementById(`${e.id}`).setAttribute('class','artist-popular-song');
                document.getElementById(`explicit${e.id}`).setAttribute('class','explicit');
                document.getElementById(`tooltip${e.id}`).style.visibility = 'hidden';

                }
            }
        })
          
    }, 2);})

    setTimeout(function(){      
        const divko = document.getElementById(element.id);
        
        divko.addEventListener('mouseout',()=>{
        array.forEach(e =>{
            if(e.id == element.id){
                
                if(e.isPlaying==false){
                    document.getElementById(`tooltip${e.id}`).style.visibility = 'hidden';
                    document.getElementById(`play${e.id}`).style.display = 'flex';
                    document.getElementById(`pause${e.id}`).style.display = 'none';
                    document.getElementById(`${e.id}`).setAttribute('class','artist-popular-song songHoverColor');
                    document.getElementById(`explicit${e.id}`).setAttribute('class','explicit explicitHoverColor');
                    
                }else {
                    document.getElementById(`tooltip${e.id}`).style.visibility = 'hidden';

                }
            }
        })
          
    }, 2);})


    

}


function play(element){
    setTimeout(function(){ 
        const divko = document.getElementById(element.id);
        
        divko.addEventListener('click',()=>{
        array.forEach(e =>{
            if(e.id == element.id){
                
                if(e.isPlaying==false){
                    e.audio.play();
                    e.isPlaying=true;
                    e.isPaused=false;
                    document.getElementById(`play${e.id}`).style.display = 'none';
                    document.getElementById(`pause${e.id}`).style.display = 'flex';
                    document.getElementById(`${e.id}`).setAttribute('class','artist-popular-song songHoverColor');
                    document.getElementById(`explicit${e.id}`).setAttribute('class','explicit explicitHoverColor');
                    document.getElementById(`tooltip${e.id}`).style.visibility = 'hidden';
                }else{
                    if(e.isPaused==false){
                        e.audio.pause();
                    e.isPaused=true;
                    document.getElementById(`play${e.id}`).style.display = 'flex';
                    document.getElementById(`pause${e.id}`).style.display = 'none';
                    document.getElementById(`tooltip${e.id}`).style.visibility = 'hidden';

                    

                   
                    }else{
                        if(e.isPaused==true){
                            e.audio.play();
                        e.isPaused=false;
                        document.getElementById(`play${e.id}`).style.display = 'none';
                        document.getElementById(`pause${e.id}`).style.display = 'flex';
                        document.getElementById(`tooltip${e.id}`).style.visibility = 'hidden';

                        }
                    }
                    }
                
            }else {
                e.audio.pause();
                e.audio.src = e.audio.src;
                e.isPlaying = false;
                e.isPaused=false;
                document.getElementById(`play${e.id}`).style.display = 'none';
                document.getElementById(`pause${e.id}`).style.display = 'none';
                document.getElementById(`${e.id}`).setAttribute('class','artist-popular-song');
                document.getElementById(`explicit${e.id}`).setAttribute('class','explicit');
                


            }
        })


        
        console.log(array)   
        

    }, 1);})
}



export {showPopularSongs, array}