class Hero {
    constructor(world){
        this.position = [0,0]
        this.dimension = [16,28]
        this.name = 'Lukas'
        this.me = document.querySelector('#wizzard')
        console.log('hero created')
        this.world = world;
        this.moveBy = 5;
    }

    init = () => {
        document.addEventListener('keydown',(event)=>{
            if(event.key=='ArrowRight'){
                this.moveRight();
            }
            if(event.key=='ArrowLeft'){
                this.moveLeft();
            }
            if(event.key=='ArrowUp'){
                this.moveUp();
            }
            if(event.key=='ArrowDown'){
                this.moveDown();
            }
        })
    }

    moveRight = () =>{
        if(this.position[0] < this.world.width - this.dimension[0] -this.moveBy){
            this.position[0] += this.moveBy;
            this.updatePosition();
        }
        
    }
    moveLeft = () =>{
        if(this.position[0] > 0  ){
            this.position[0] -= this.moveBy;
            this.updatePosition();
        }
        
    }

    moveDown = () =>{
        if(this.position[1] < this.world.width - this.dimension[1] -this.moveBy){
            this.position[1] += this.moveBy;
            this.updatePosition();
        }
        
    }
    moveUp = () =>{
        if(this.position[1] > 0  ){
            this.position[1] -= this.moveBy;
            this.updatePosition();
        }
        
    }

    updatePosition = ()=> {
        this.me.style.left = `${this.position[0]}px`;
        this.me.style.top = `${this.position[1]}px`;
        this.world.positionChanged(this.position[0],this.position[1]);
    }

    
}



export default Hero;

