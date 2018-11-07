import ReportApp from './report-app.js';

const app = new ReportApp();
const root = document.getElementById('root');
root.appendChild(app.render());