function input(matrix){

let mainDiagonalSum=0;
let otherDiagonalSum=0;
let valueToSubstract = matrix.length-1;

    for(let i = 0; i<matrix.length; i++){
        mainDiagonalSum+=matrix[i][i];
        otherDiagonalSum+= matrix[i][valueToSubstract-i];
    }
     let result= [];
     result.push(mainDiagonalSum);
     result.push(otherDiagonalSum);
     return result.join(' ');
}

console.log(input([[20, 40],
       [10, 60]]
       ));

  console.log(input([[3, 5, 17],
         [-1, 7, 14],
         [1, -8, 89]]
        ));