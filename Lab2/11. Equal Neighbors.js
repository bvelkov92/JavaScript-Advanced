function input(matrix) {

    let numEquals = 0;



    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let currentNum = matrix[i][j];
            if (matrix[i][j+1]===currentNum){
                    numEquals++;
            }
            if (i!==matrix.length -1 && currentNum===matrix[i+1][j]){
                numEquals++;
            }
        }    
    }

    return numEquals;
}

console.log(input([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(input([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));