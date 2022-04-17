function input(numberStars){
    let result;
        result = '*';
        if (numberStars>1){
            result='';
        for(let i = 1; i<=numberStars; i++){
            for(let j = 1; j<=numberStars; j++){
                result = result+ '*' +" ";
        }
        result=result+"\r\n";
    }
}
console.log(result);

}

input(7);