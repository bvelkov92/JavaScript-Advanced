function input (array){

    console.log(array.sort((a,b)=> a.length-(b.length) || a.localeCompare(b)).join('\n'));
    

}

input(['alpha', 
'beta', 
'gamma']
);

input(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

input(['test', 
'Deny', 
'omen', 
'Default']
);