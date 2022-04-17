function input (array){
const newArray=[];
for (const iterator of array) {
    if (iterator >=0){
        newArray.push(iterator);
    }else{
        newArray.unshift(iterator);
    }
}
    console.log(newArray.join('\n'));
}

input([7, -2, 8, 9]);