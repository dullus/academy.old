class Hero{
    constructor(world){
        this.position = [0,0]
        this.dimensions = [16,20]
        this.name = 'wizard';
        this.me = document.querySelector('#wizard');
        console.log('hero created')
        this.world = world;
        this.moveBy = 5;
        

    }

    init = () => {
        document.addEventListener('keydown', (event) => {
          
            if (event.key === 'ArrowRight') {
                this.moveRight();
            }
        })
    }

    moveRight = () => {
        
        if (this.position[0] < this.world.width - this.dimensions[0] - this.moveBy) {
            this.position[0] += this.moveBy;
            this.updatePosition();
        }
    }

    updatePosition = ()=> {
        
        this.me.style.left = `${this.position[0]}px`;
        this.me.style.top = `${this.position[1]}px`;
        this.world.positionChanged(this.position[0], this.position[1]);
    }

}

export default Hero;