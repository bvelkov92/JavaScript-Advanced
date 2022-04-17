function input(array) {
    let result = array.filter((v, i) => i % 2 == 1);

    
   for (let i=0; i<result.length; i++){
       result[i] *=2;
   }
   let finalArr= result.reverse();
    return finalArr;
}

console.log(input([10, 15, 20, 25]));
console.log(input([3, 0, 10, 4, 7, 3]));