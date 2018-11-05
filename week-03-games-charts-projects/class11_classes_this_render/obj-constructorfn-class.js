
/* Revealing Module Pattern */

// function makeComponentA() {

//     return {
//         init(stuff) {
    
//         }
//     };
// }

// export default makeComponentA;

/* Constructor Function Pattern */

// function Pet(name) {
//     this.name = name;
// }

// Pet.prototype.sayHello = function() {
//     return 'I am ' + this.name;
// };

/* Class Component Pattern */

class Pet {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return 'I am ' + this.name;
    }
}

export default Pet;


