
const section = document.getElementById('fruit-detail');

const fruitDetail = {
    init(onRemove) {
        const removeButton = section.querySelector('button');
        removeButton.addEventListener('click', function() {
            onRemove(fruitDetail.fruit);
            fruitDetail.fruit = null;
            section.classList.add('hidden');
        });
    },
    update(fruit) {
        fruitDetail.fruit = fruit;
        section.querySelector('h2').textContent = fruit.name;
        section.querySelector('p').textContent = fruit.description;
        section.classList.remove('hidden');
    }
};

export default fruitDetail;