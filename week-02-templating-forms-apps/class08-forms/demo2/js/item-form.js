
const form = document.getElementById('form');

const itemForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // form elements collection
            const elements = form.elements;

            // data object
            const item = {};
            
            // gather data, ie:
            item.title = elements.title.value;



            // call the callback with new item
            onAdd(item);
        });

    }
};

export default itemForm;