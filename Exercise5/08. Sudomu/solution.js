function solve() {
    let gameRound = document.querySelectorAll('input[type="number"]');
    let [quickCheck, clear] = document.querySelectorAll('button');
    quickCheck.addEventListener('click', checkGame);
    clear.addEventListener('click', clearRound);
    let output = document.querySelector('#check p');
    let tableBorder = document.querySelector('table');
    
    function clearRound(ev){
        gameRound.forEach(field => field.value ='');
        output.style.color= '';
        tableBorder.style.border = '';
        output.textContent ='';
    }
    
    function checkGame(event){
    let succesfully=true;
    let baseSum = Number(6);
    if (Number(gameRound[0].value) + Number(gameRound[1].value) + Number(gameRound[2].value)!==baseSum
        || Number(gameRound[6].value) +Number(gameRound[7].value) +Number(gameRound[8].value)!==baseSum
        || Number(gameRound[2].value) +Number(gameRound[5].value) +Number(gameRound[8].value)!==baseSum
        || Number(gameRound[0].value) +Number(gameRound[3].value) +Number(gameRound[6].value)!==baseSum
        || Number(gameRound[1].value) +Number(gameRound[4].value) +Number(gameRound[7].value)!==baseSum
    ){
        succesfully=false
    };
    if (succesfully){
        output.textContent = 'You solve it! Congratulations!';
        output.style.color= 'green';
        tableBorder.style.border = '2px solid green';
    }else{
        output.textContent = 'NOP! You are not done yet...'; 
        output.style.color= 'red';
        tableBorder.style.border = '2px solid red';
    }
    }
    }