function input(fruitType,fruitWeight,price){

    let weightInKgs = fruitWeight/1000;
    let sum = weightInKgs*price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruitType}.`);

}



input('orange', 2500, 1.80);