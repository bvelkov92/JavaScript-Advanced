function input(array){

let output = [];


for (let i=0; i<array.length; i++){

    if (array[i]=='remove'){
        output.pop();
    }else{
        output.push(i+1);
    }
}
if (output.length<=0){
    console.log('Empty');
}else{
    console.log(output.join(`\n`));
}
}
input(['add', 
'add', 
'add', 
'add']
);
input(['add', 
'add', 
'remove', 
'add', 
'add']
);

input(['remove', 
'remove', 
'remove']
);