import addFruit from './add-fruit.js';
import fruitList from './fruit-list.js';
import fruitApi from './fruits-api.js';
import fruitDetail from './fruit-detail.js';

const fruits = fruitApi.getAll();

fruitList.init(fruits, fruit => {
    fruitDetail.update(fruit);
});

fruitDetail.init(fruit => {
    const index = fruitApi.remove(fruit);
    fruitList.remove(index);
});

addFruit.init(fruit => {
    // this is the onAdd listener

    // tell the api service first
    fruitApi.add(fruit);

    // then update components
    fruitList.add(fruit);
});