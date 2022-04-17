function input(matrix) {
    let biggestNumber = matrix[0][0];
    
    for (const number of matrix) {
        let currentBiggest = number.sort((a, b) => b - a)[0];
        if (biggestNumber < currentBiggest) {
            biggestNumber = currentBiggest;
        }
    }
    return biggestNumber;
}

console.log(input([[20, 50, 10],
[8, 33, 145]]
));