import html from '../html.js';
import Lights from './lights.js';

function makeTemplate() {
    return html`
        <h3>Get Ready!</h3>
    `;
}

export default class Player {
    constructor(sequence, onPlayed) {
        this.sequence = sequence;
        this.pointer = 0;
        this.interval = 1500;
        this.timeOn = 1000;
        this.onPlayed = onPlayed;
    }

    blinkLight() {
        const lightIndex = this.sequence[this.pointer];
        this.pointer++;

        this.lights.activate(lightIndex);

        setTimeout(() => {
            if(this.pointer === this.sequence.length) {
                this.onPlayed();
            }
            else {
                this.blinkLight();
            }
        }, this.interval);
    }

    render() {
        const dom = makeTemplate();
        const header = dom.querySelector('h3');

        this.lights = new Lights(this.timeOn);
        dom.appendChild(this.lights.render());

        setTimeout(() => {
            header.textContent = 'Watch the sequence...';
            this.blinkLight();
        }, 1000);

        return dom;
    }
}