import html from '../html.js';

let template = function(channel) {
    let name = channel.name;
    let count = channel.count;

    return html`
        <li>${name} had ${count} views</li>
    `;
};

export default class ChannelReport {
    constructor(channel) {
        this.channel = channel;
    }

    render() {
        let dom = template(this.channel);
        return dom;
    }
}