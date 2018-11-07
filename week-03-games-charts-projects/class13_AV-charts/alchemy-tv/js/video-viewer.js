import html from './html.js';

let template = function(name, video) {
    return html`
        <div class="viewer">
            <h2>${name}</h2>
            <div class="tv">
                <div class="screen">
                    <video src="${video}" autoplay></video>
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
        let dom = template(this.channel.name, this.channel.video);
        this.header = dom.querySelector('h2');
        this.videoPlayer = dom.querySelector('video');
        return dom;
    }
}