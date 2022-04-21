function input (array){

    const outArr = [];
    let beforeNumber = array[0];
    for (const symbol of array) {
        if (beforeNumber<=symbol){
            outArr.push(symbol);
            beforeNumber =symbol;
        }
    }
    return outArr;
}

console.log(input([1,3, 8, 4, 10, 12, 3, 2,24]));
console.log(input([20, 3,2, 15, 6, 1]));
console.log(input([1, 
    2, 
    3,
    4]
    ));