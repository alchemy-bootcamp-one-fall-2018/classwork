import html from './html.js';

let template = function(name) {
    return html`
        <li class="channel">
            <h3>${name}</h3>
        </li>
    `;
};

export default class Channel {
    constructor(channel, onSelect) {
        this.channel = channel;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.channel.name);
        
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.channel);
        });
        
        return dom;
    }
}