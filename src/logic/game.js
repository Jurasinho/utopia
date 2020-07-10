import { Country} from './country'

export class Game {
    country = new Country();
    store = null;
    constructor(store){
        this.store = store;
        this.newGame();
    }
    newGame() {
        this.store.dispatch('start', this.country);
    }
}
