import addFruit from './add-fruit.js';
import fruitList from './fruit-list.js';
import fruitApi from './fruits-api.js';
import fruitDetail from './fruit-detail.js';

const fruits = fruitApi.getAll();

fruitList.init(fruits, /*onSelect*/ function(fruit) {
    fruitDetail.update(fruit);
});

fruitDetail.init(/*onRemove*/ function(fruit) {
    const index = fruitApi.remove(fruit);
    // TODO: tell fruit list to re-render
    fruitList.remove(index);
});

addFruit.init(function(fruit) {
    // this is the onAdd listener

    // tell the api service first
    fruitApi.add(fruit);

    // then update components
    fruitList.add(fruit);
});