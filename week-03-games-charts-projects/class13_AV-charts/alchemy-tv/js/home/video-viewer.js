import html from '../html.js';

let template = function(channel) {
    return html`
        <div class="viewer">
            <h2>${channel.name}</h2>
            <div class="tv">
                <div class="screen">
                    <video src="${channel.video}" autoplay></video>
                </div>
            </div>
        </div>
    `;
};

export default class VideoViewer {
    constructor(channel) {
        this.channel = channel;
    }

    update(channel) {
        this.channel = channel;
        this.header.textContent = this.channel.name;
        this.videoPlayer.src = this.channel.video;
    }

    render() {
        let dom = template(this.channel);
        
        // store these two elements for use in update
        this.header = dom.querySelector('h2');
        this.videoPlayer = dom.querySelector('video');

        return dom;
    }
}