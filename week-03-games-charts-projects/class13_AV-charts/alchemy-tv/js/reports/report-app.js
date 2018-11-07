import html from '../html.js';
import channelsApi from '../channels-api.js'; 
import ViewingChart from './viewing-chart.js';
import ViewingReport from './viewing-report.js';

function makeTemplate() {
    return html`
        <header>
            <div>
                <img class="logo" src="assets/logo.png">
                <h1>AlchemyTV Reports</h1>
            </div>
            <nav>
            </nav>
        </header>

        <main>
            <section class="viewing-chart"></section>
            <section class="viewing-report"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.channelData = channelsApi.getAll();
    }

    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.viewing-chart');
        const chart = new ViewingChart(this.channelData);
        chartSection.appendChild(chart.render());

        const reportSection = dom.querySelector('.viewing-report');
        const report = new ViewingReport(this.channelData);
        reportSection.appendChild(report.render());

        return dom;
    }
}