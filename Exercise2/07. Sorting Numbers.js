function input(array){
    const outArr =[];
    let halfMatrix;
    array.sort((a,b)=> a-b);
    if (array.length%2===1){
     halfMatrix =Math.floor(array.length/2);
    }else{
        halfMatrix= array.length/2-1;
    }
    for (let index = 0; index <=halfMatrix; index++) {
        const element = array[index];
        if(index===halfMatrix && array.length%2===1){
            outArr.push(array[index])
        }else{
            outArr.push(array[index]);
            outArr.push(array[array.length-1-index]);
        } 
    }
    return outArr;
}
console.log(input([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,100]));