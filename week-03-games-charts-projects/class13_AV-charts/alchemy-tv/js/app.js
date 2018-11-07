import html from './html.js';
import channelsApi from './channels-api.js';
import VideoViewer from './video-viewer.js';
import ChannelSelector from './channel-selector.js';

function makeTemplate() {
    return html`
        <header>
            <div>
                <img class="logo" src="assets/logo.png">
                <h1>AlchemyTV</h1>
            </div>
            <nav>
            </nav>
        </header>

        <main>
            <section class="video-viewer"></section>
            <section class="channel-selector"></section>
        </main>
    `;
}

export default class App {
    constructor() {
        this.channels = channelsApi.getAll();
        this.totalCount = 0;
    }

    render() {
        let dom = makeTemplate();

        let viewerSection = dom.querySelector('.video-viewer');

        let firstChannel = this.channels[0];
        let viewer = new VideoViewer(firstChannel);
        viewerSection.appendChild(viewer.render());

        let channelSelector = new ChannelSelector(this.channels, channel => {
            channel.count++;
            this.totalCount++;
            viewer.update(channel);
        });

        let selectorSection = dom.querySelector('.channel-selector');
        selectorSection.appendChild(channelSelector.render());


        return dom;
    }
}