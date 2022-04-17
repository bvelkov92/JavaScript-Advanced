function input (numberOne,numberTwo,operator){

    let result;
    switch(operator){
            case '+':
            result = numberOne+numberTwo;
            break
            case '-':
                result = numberOne-numberTwo;
            break
            case '*':
                result = numberOne*numberTwo;
            break
            case '/':
                result = numberOne/numberTwo;
            break
            case '%':
                result = numberOne%numberTwo;
            break
            case '**':
                result = numberOne**numberTwo;
            break

    }

        console.log(result);
}

input(1,2,'*');