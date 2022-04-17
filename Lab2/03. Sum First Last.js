function input (array){

 const newArray = [];   
if (array.length===1){
    return array[0];
}
else{
    while(array.length>1){
        let firstNumber =Number(array.shift());
        let secondNumber =Number(array.pop());
        newArray.push(firstNumber+secondNumber);
    }
}
return newArray;
} 
console.log(input(['20', '30', '40']));
console.log(input(['5', '10']));