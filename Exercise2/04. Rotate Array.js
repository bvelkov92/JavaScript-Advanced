function input(array, numCycles) {
    for (let i = 0; i < numCycles; i++) {
        let currentValue = array.pop();
        array.unshift(currentValue);
    }

    console.log(array.join(` `));
}
input(['1',
    '2',
    '3',
    '4'],
    2
);
input(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);