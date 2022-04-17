function input (array, startIndexValue,endIndexValue ){

let startIndex = array.indexOf(startIndexValue);
let endIndex = array.indexOf(endIndexValue);

return (array.slice(startIndex, endIndex+1));

}
console.log(input(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));