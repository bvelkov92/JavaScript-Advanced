function input(month,year){

let date = new Date(year,month,0).getDate();
console.log(date);
}

input(1, 2012);