function input(fromNumber,toNumber){

    let from=Number(fromNumber);
    let to= Number(toNumber);
    let sum =0;
    for(let i = from; i<=to; i++){
        sum+=i;
    }
    console.log(sum);

}

input('1', '5');
input('-8', '20');