function input (arrayLength, elementBefore){

    const newArray = [];
    newArray.push(1);
    
    for(let i=0; i<arrayLength-1; i++){
        let sum =0;
        let nextStartIndex =0;
        if (i-elementBefore+1>0){
            nextStartIndex=i-elementBefore+1;
        }
        for(let j=nextStartIndex; j<=i; j++){
            sum+=newArray[j];
        }
        newArray.push(sum)
    }
    return newArray;
}

console.log(input(6, 3));
console.log(input(8, 2));