import html from '../html.js';
import Lights from './lights.js';

function makeTemplate() {
    return html`
        <h3>Repeat the Sequence...</h3>
    `;
}

export default class Recorder {
    constructor(sequence, onResult) {
        this.sequence = sequence;
        this.onResult = onResult;
        this.pointer = 0;
        this.timeOn = 1000;
        this.timeToPlay = 2500;
    }

    stopTimeout() {
        if(this.cancel) {
            clearTimeout(this.cancel);
        }
    }

    startTimeout() {
        this.cancel = setTimeout(() => {
            this.onResult('timeout');
        }, this.timeToPlay);
    }

    render() {
        const dom = makeTemplate();

        const lights = new Lights(this.timeOn, index => {
            this.stopTimeout();
            const correct = this.sequence[this.pointer];
            this.pointer++;
            if(index !== correct) {
                this.onResult('incorrect');
            }
            else if(this.pointer === this.sequence.length) {
                // wait for light to turn off...
                setTimeout(() => {
                    this.onResult('correct');
                }, this.timeOn);
            }
            else {
                this.startTimeout();
            }
        });

        dom.appendChild(lights.render());

        this.startTimeout();

        return dom;
    }
}