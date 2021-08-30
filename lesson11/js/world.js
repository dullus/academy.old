<<<<<<< HEAD
class  World {
=======
class World {
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    constructor() {
        this.width = 400;
        this.height = 400;
        this.score = 0;
        this.enemies = [];
    }

    init() {
        const enemy1 = document.querySelector('#demon');
<<<<<<< HEAD
        this.enemies.push(enemy1);
=======
        this.enemies.push(enemy1)
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    }

    updateScore() {
        this.score++;
<<<<<<< HEAD
        document.querySelector("#score").innerHTML = `Score: ${this.score}`;
    }
=======
        document.querySelector('#score').innerHTML = `Score: ${this.score}`;
    }

>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    resetScore() {
        this.score = 0;
    }

<<<<<<< HEAD
    positionChanged(x,  y) {

        const whatToSave = [];
        this.enemies.forEach((enemy, i) => {
            if (enemy.offsetLeft <= x ) {
=======
    positionChanged(x, y) {
        const whatToSave = [];
        this.enemies.forEach((enemy, i) => {
            if (enemy.offsetLeft <= x) {
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
                // update score
                this.updateScore();
                // remove image
                enemy.style.display = 'none';
            } else {
                whatToSave.push(enemy);
            }
        })
<<<<<<< HEAD

        this.enemies = whatToSave;
        // {left: enemy1.offsetLeft, top: 0}
    }
}


=======
        this.enemies = whatToSave
        // {left: enemy1.offsetLeft, top: enemy1.offsetTop}
    }
}

>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
export { World };