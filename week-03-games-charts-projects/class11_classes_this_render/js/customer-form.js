import html from './html.js';

function makeTemplate() {
    return html`
        <form name="customer">
            <label>
                Name:
                <input required name="name">
            </label>
            <label>
                Address:
                <input required name="address">
            </label>
            <label>
                City:
                <input required name="city">
            </label>
            <label>
                <button class="action">Place Order</button>
            </label>
        </form>
    `;
}

class CustomerForm {
    constructor(onOrder) {
        this.onOrder = onOrder;
    }

    render() {
        const dom = makeTemplate();

        const form = dom.querySelector('form');

        form.addEventListener('submit', event => {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            const customer = {
                name: elements.name.value,
                address: elements.address.value,
                city: elements.city.value
            };

            this.onOrder(customer);
        });

        return dom;
    }
}

export default CustomerForm;