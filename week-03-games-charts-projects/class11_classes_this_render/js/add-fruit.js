
const addFruit = {
    // "init" method for initializing the component
    // 1. passed data or callback functions
    // 2. setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

        // below is different way to write this
        // form.onsubmit = function() {};

        // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', event => {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            const fruit = {
                name: elements.name.value,
                price: parseFloat(elements.price.value),
                description: elements.description.value,
                color: elements.color.value,
                image: elements.image.value
            };

            onAdd(fruit);

            form.reset();
            document.activeElement.blur();
        });

    }
};

export default addFruit;