function input (inpArr){

const output = {};

    const inputedValues = inpArr;
    for (const val of inputedValues) {
        let current = val.split(' <-> ');
        const key = current[0];
        const value =Number(current[1]);
        if (output[key]==undefined){
            output[key]= value;
        }else{
            output[key]+=value;
        }
    }

    for (const val in output) {
        console.log(`${val} : ${output[val]}`);
    }

}

input(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);