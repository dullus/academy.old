


function playRandomMusic (array){
    setTimeout(function(){
        //  array[1].audio.play();
              
        
       const playIcon = document.getElementById('play-button')
       playIcon.addEventListener('click', ()=>{
           array.forEach(e => {
               e.isPLaying = false;
               e.isPaused = false;
               e.audio.pause();
               e.audio.src = e.audio.src;
           });
           array[getRandomInt(array.length)].audio.play();
       })
        }, 200);
    
    
    

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export{playRandomMusic}