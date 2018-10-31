
const form = document.getElementById('form');

const itemForm = {
    init(onAdd) {
        form.addEventListener('submit', function() {

            // gather data

            onAdd(/*data*/);
        });

    }
};

export default itemForm;