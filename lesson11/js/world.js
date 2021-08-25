import Hero from "./hero.js";

class World{
    constructor(){
        this.width = 400;
        this.height = 400;
        this.score = 0;
        this.enemies=[];
    }

    init(){
        const enemy1 = document.getElementById('deamon');
        this.enemies.push(enemy1)
    }
    updateScore() {
        this.score++
    }
    resetScore(){
        this.score = 0;
    }
    positionChanged(x,y){
        const whatToSave= [];
        this.enemies.forEach((enemy)=>{
            if(enemy.offsetLeft <= x){
                //update score
                this.updateScore();
                //remove image
                enemy.style.display = 'none';
                //save remove enemy
                
            }else{
                whatToSave.push(enemy);
            }
        })

        this.enemies = whatToSave;
        //{left: enemy1.offsetLeft, top: enemy1.offsetTop}
    }
}


export {World};