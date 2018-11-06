import html from './html.js';

function makeTemplate() {
    return html`
        <h1>Hello World</h1>
    `;
}

class HelloWorld {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default HelloWorld;