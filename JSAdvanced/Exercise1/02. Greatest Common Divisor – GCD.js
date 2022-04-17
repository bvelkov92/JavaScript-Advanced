function input(firstNumber,secondNumber){

    while(secondNumber) {
        let currentDevisior = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = currentDevisior;
      }
      console.log(firstNumber);
}

input(2154, 458);