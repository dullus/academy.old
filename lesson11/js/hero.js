<<<<<<< HEAD
const hero = "Superman";

class Hero {
    constructor(world) {
        this.position = [0, 0];
        this.dimension = [16,28];
        this.name = 'Legolas';
        this.me =  document.querySelector('#elf');
=======
class Hero {
    constructor(world) {
        this.position = [0,0]
        this.dimension = [16, 28]
        this.name = 'Wizzard'
        this.me = document.querySelector('#wizzard');
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
        this.world = world;
        this.moveBy = 5;
    }

    init = () => {
        document.addEventListener('keydown', (event) => {
<<<<<<< HEAD
            /*if(event.key === 'ArrowRight') {
                    this.moveRight();
            }else if(event.key === 'ArrowLeft') {
                this.moveLeft();
            }else if(event.key === 'ArrowUp') {
                this.moveUp();
            } else if(event.key == 'ArrowDown') {
                this.moveDown;
            }*/
            switch (event.key) {
                case 'ArrowRight':
                    this.moveRight();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                default:
                    console.log('Invalid key pressed!');
            }

        })
    }
    moveRight = () => {
        
        if (this.position[0] < this.world.width - this.dimension[0] - 5) {
            this.position[0] += this.moveBy;
            this.updatePosition();    
        }
        
    }

    moveLeft = () => {
        if (this.position[0] > this.dimension[0]-10) {
            this.position[0] -= this.moveBy;
            this.updatePosition();
        }

    }

    moveUp = () => {
        if(this.position[1] > this.dimension[1] - 25) {
            this.position[1] -= this.moveBy;
            this.updatePosition();
        }

    }

    moveDown = () => {

        if(this.position[1] < this.world.height-this.dimension[1]-10) {
            this.position[1] += this.moveBy;
            this.updatePosition();
        }

    }
    updatePosition = () => {
        this.me.style.left = `${this.position[0]}px`;
        this.me.style.top = `${this.position[1]}px`;
        this.world.positionChanged(this.position[0], this.position[1]);
=======
            if (event.key === 'ArrowRight') {
                this.moveRight();
            }
            else if (event.key === 'ArrowLeft') {
                this.moveLeft();
            }
        })
    }

    moveRight = () => {
        if (this.position[0] < this.world.width - this.dimension[0] -this.moveBy ) {
            this.position[0] += this.moveBy;
            this.updatePostion();
        }
    }

    updatePostion = () => {
        this.me.style.left = `${this.position[0]}px`;
        this.me.style.top = `${this.position[1]}px`;
        this.world.positionChanged(this.position[0], this.position[1])
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    }
}

export default Hero;