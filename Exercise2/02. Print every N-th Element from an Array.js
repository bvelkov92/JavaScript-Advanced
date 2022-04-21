function input (array, index){
    let newArray=[];
for(let i=0; i<array.length; i+=index){
    newArray.push(array[i]);
}

return newArray;
}

console.log(input(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));