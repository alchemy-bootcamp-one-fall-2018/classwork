import html from './html.js';

function makeTemplate() {
    return html`
        <div>
            <img class="logo" src="assets/logo.png">
            <h1>Fruit Cart</h1>
        </div>
        <nav>
            <a href="./">Home</a>
            <a href="products.html">Products</a>
            <a href="order.html">Order</a>
        </nav>
    `;
}

class Header {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}

export default Header;