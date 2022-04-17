function input (array){

    const newArray= array.filter((v,i)=> i%2==0);
    console.log(newArray.join(' '));
}

input(['20', '30', '40', '50', '60'])