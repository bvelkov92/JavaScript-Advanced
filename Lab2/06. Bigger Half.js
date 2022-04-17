function input(array){

    array.sort((a,b)=> a-b);
    const middleIndex=Math.floor(array.length/2);
    const newArray = array.slice(middleIndex);

    return newArray;
}
console.log(input([4, 7, 2, 5]));