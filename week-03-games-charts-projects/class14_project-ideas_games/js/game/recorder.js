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

export default class Recorder {
    constructor(sequence, onResult) {
        this.sequence = sequence;
        this.onResult = onResult;
        this.pointer = 0;
    }

    render() {
        const dom = makeTemplate();
        this.lights = dom.querySelectorAll('li');
        for(let i = 0; i < this.lights.length; i++) {
            const light = this.lights[i];

            light.addEventListener('click', () => {
                light.classList.add('active');
                
                setTimeout(() => {
                    light.classList.remove('active');
                }, 500);
                
                const correct = this.sequence[this.pointer];
                this.pointer++;
                if(i !== correct) {
                    this.onResult(false);
                }
                else if(this.pointer === this.sequence.length) {
                    this.onResult(true);
                }
            });
        }

        return dom;
    }
}