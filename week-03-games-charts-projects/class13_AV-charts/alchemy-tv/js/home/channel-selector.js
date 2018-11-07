import html from '../html.js';
import Channel from './channel.js';

function makeTemplate() {
    return html`
        <ul class="channel-list"></ul>
    `;
}

export default class ChannelSelector {
    constructor(channels, onSelect) {
        this.channels = channels;
        this.onSelect = onSelect;
    }

    render() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        this.channels.forEach(channel => {
            let channelComp = new Channel(channel, this.onSelect);
            ul.appendChild(channelComp.render());
        });
        
        return dom;
    }
}