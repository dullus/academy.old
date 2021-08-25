import Hrdina from "./hero.js";
import { World } from "./world.js";

const world = new World();

world.init();
const hero = new Hrdina(world);

hero.init();
