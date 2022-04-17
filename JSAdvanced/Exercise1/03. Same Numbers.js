function input(inputValue) {

    let valueStr = String(inputValue);

    let firstNumber = Number(valueStr[0]);
    let sum =firstNumber;
    let inputLength = String(inputValue).length;
    let isEquals = true;
    
    for(let i = 1; i<inputLength; i++){
        let strValue = String(inputValue)[i];
        let currentValue = Number(strValue);
        if (currentValue!==firstNumber && isEquals){
            isEquals=false;
        }
        if (isEquals){
            firstNumber=currentValue;
        }
        sum+=currentValue
    }
    

    console.log(isEquals);
    console.log(sum);
}

input(2222222);
