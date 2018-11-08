
export default function makeSequence(length, numberOfLights) {
    numberOfLights = numberOfLights || 4;
    const sequence = [];
    while(length--) {
        sequence.push(getRandomIndex(numberOfLights));
    }

    return sequence;
}

function getRandomIndex(max) {
    // The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * max); 
}