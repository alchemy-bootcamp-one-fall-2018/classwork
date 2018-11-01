
let fruits = [
    {
        name: 'Apple',
        color: 'red',
        image: 'apple.png',
        description: 'red and shiny'
    },
    {
        name: 'Banana',
        color: 'yellow',
        image: 'banana.png',
        description: 'yellow and slippery'
    }
];

function saveFruits() {
    localStorage.setItem('fruits', JSON.stringify(fruits));
}

const fruitsApi = {
    getAll() {
        const json = localStorage.getItem('fruits');
        if(json) {
            fruits = JSON.parse(json);
        }
        return fruits;
    },
    add(fruit) {
        // 1. add to our array
        fruits.push(fruit);
        // 2. save array to localStorage
        saveFruits();
    },
    remove(fruit) {
        const index = fruits.indexOf(fruit);
        if(index !== -1) {
            fruits.splice(index, 1);
            saveFruits();
            return index;
        }
    }
};

export default fruitsApi;