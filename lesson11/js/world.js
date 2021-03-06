class World {
    constructor() {
        this.width = 400;
        this.height = 400;
        this.score = 0;
        this.enemies = [];
    }

    init() {
        const enemy1 = document.querySelector('#demon');
        this.enemies.push(enemy1)
    }

    updateScore() {
        this.score++;
        document.querySelector('#score').innerHTML = `Score: ${this.score}`;
    }

    resetScore() {
        this.score = 0;
    }

    positionChanged(x, y) {
        const whatToSave = [];
        this.enemies.forEach((enemy, i) => {
            if (enemy.offsetLeft <= x) {
                // update score
                this.updateScore();
                // remove image
                enemy.style.display = 'none';
            } else {
                whatToSave.push(enemy);
            }
        })
        this.enemies = whatToSave
        // {left: enemy1.offsetLeft, top: enemy1.offsetTop}
    }
}

export { World };