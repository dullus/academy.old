import Hero from './hero.js'
import {World as Svet} from './world.js'


const world = new Svet();
const hero = new Hero(world);

hero.init();
world.init();


