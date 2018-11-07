import html from '../html.js';
import ReportItem from './viewing-report-item.js';

function makeTemplate() {
    return html`
        <ul class="viewing-report"></ul>
    `;
}

export default class ViewingReport {
    constructor(results) {
        this.results = results;
    }

    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.viewing-report');

        this.results.forEach(channel => {
            const reportItem = new ReportItem(channel);
            list.appendChild(reportItem.render());
        });

        return dom;
    }
}