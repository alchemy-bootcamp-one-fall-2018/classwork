import html from '../html.js';

function makeTemplate() {
    return html`
        <ul class="lights">
            <li class="red-light"></li>
            <li class="green-light"></li>
            <li class="yellow-light"></li>
            <li class="blue-light"></li>
        </ul>
    `;
}

export default class Player {
    constructor(sequence, onPlayed) {
        this.sequence = sequence;
        this.pointer = 0;
        this.interval = 1000;
        this.intraInterval = 500;
        this.onPlayed = onPlayed;
    }

    renderLight() {
        const lightIndex = this.sequence[this.pointer];
        this.pointer++;
        const light = this.lights[lightIndex];
        light.classList.add('active');
        setTimeout(() => {
            light.classList.remove('active');

            setTimeout(() => {
                if(this.pointer === this.sequence.length) {
                    this.onPlayed();
                }
                else {
                    this.renderLight();
                }
            }, this.intraInterval);

        }, this.interval);
    }

    render() {
        const dom = makeTemplate();
        this.lights = dom.querySelectorAll('li');
        this.renderLight();
        return dom;
    }
}