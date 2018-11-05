

function makeFruit(fruit) {
    const html = /*html*/`
        <li class="fruit">
            <h3 class="name" style="background: ${fruit.color};">
                ${fruit.name}
            </h3>
            <p class="price">$${fruit.price.toFixed(2)}</p>
            <img src="assets/${fruit.image ? fruit.image : 'logo.png'}">
            <div class="order-buttons hidden">
                <button class="decrement">-</button>
                <button class="increment">+</button>
                <button class="increment-five">+5</button>
            </div>
        </li>
    `;

    // A. Create template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;

    // C. Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}

const list = document.getElementById('fruits');

const fruitList = {
    // init
    // should include:
    // 1. initial fruits array
    // 2. onSelect callback (optional)
    // 3. onOrder callback (optional)
    init(fruits, onSelect, onOrder) {
        fruitList.fruits = fruits;
        fruitList.onSelect = onSelect;
        fruitList.onOrder = onOrder;

        for(let i = 0; i < fruits.length; i++) {
            fruitList.add(fruits[i]);
        }
    },
    add(fruit) {
        const dom = makeFruit(fruit);

        // do work of finding elements _before_ appending

        const listItem = dom.querySelector('li');

        if(fruitList.onSelect) {
            listItem.addEventListener('click', function() {
                fruitList.onSelect(fruit);
            });
        }

        if(fruitList.onOrder) {
            listItem.classList.add('order');
            const buttonsContainer = dom.querySelector('.order-buttons');
            buttonsContainer.classList.remove('hidden');

            const increment = dom.querySelector('button.increment');
            const incrementFive = dom.querySelector('button.increment-five');
            const decrement = dom.querySelector('button.decrement');
            
            increment.addEventListener('click', function() {
                fruitList.onOrder(fruit, 1);
            });
            
            incrementFive.addEventListener('click', function() {
                fruitList.onOrder(fruit, 5);
            });
            
            decrement.addEventListener('click', function() {
                fruitList.onOrder(fruit, -1);
            });
        }

        // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
};

export default fruitList;