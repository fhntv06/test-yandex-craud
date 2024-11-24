import RunningLineController from './RunningLineController.js';
import SliderController from './SliderController.js';

export default class App {
    constructor() {
        this.init();
    }
    init () {
        new RunningLineController();
        new SliderController();
    }
}