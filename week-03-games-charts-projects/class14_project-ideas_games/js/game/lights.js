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

export default class Lights {
    constructor(timeOn, onClick) {
        this.onClick = onClick;
        this.timeOn = timeOn || 1000;
    }

    activate(index) {
        this.lights[index].classList.add('active');
        setTimeout(() => {
            this.lights[index].classList.remove('active');
        }, this.timeOn);
    }

    render() {
        const dom = makeTemplate();
        this.lights = dom.querySelectorAll('li');

        if(this.onClick) {
            for(let i = 0; i < this.lights.length; i++) {
                const light = this.lights[i];
    
                light.addEventListener('click', () => {
                    this.activate(i);
                    this.onClick(i);
                });
            }
        }
       
        return dom;
    }
}