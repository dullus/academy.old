class Auto {
    constructor() {
        this.name='tesla'
        
    }

    jazdi() {
        console.log('wrrrrrrm')
        this.niecoNove = 'dkfdkfje'
    }
}

Auto.prototype.nieco2 = 'dkdke'

const myCar = new Auto();

console.log(myCar)
myCar.jazdi()
