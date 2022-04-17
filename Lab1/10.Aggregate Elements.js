function input (array){
    let sum=0;
    let inverseNumbersSum = 0;
    let stringFormat = '';
    
    let numbers = array.map(Number);
    for(let i = 0; i<numbers.length;  i++){
            let currentNumber = numbers[i];
            sum+=currentNumber;
            inverseNumbersSum+= 1/currentNumber;
            stringFormat=stringFormat+currentNumber;
        }

    console.log(sum);
    console.log(inverseNumbersSum);
    console.log(stringFormat);
}

input([1, 2, 3]);