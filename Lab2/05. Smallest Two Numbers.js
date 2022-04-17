function input (array){
    const result = [];
    let theSmallestNumberOne=array[0];
    let theSmallestNumberTwo=array[0];

   array.sort((a, b) => a - b);

   console.log(array[0], array[1]);
}

input([30, 15, 50, 5]);
input([3, 0, 10, 4, 7, 3]);