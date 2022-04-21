function input (array){

    array.sort((a,b)=> a.localeCompare(b));

    let num = 1;
    for (const word of array) {
        console.log(`${num}.${word}`);
        num++;
    }

}
input(["John", "Bob", "Christina", "Ema"]);