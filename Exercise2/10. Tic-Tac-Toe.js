function input(commandsArr) {

    const matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];


    let isBusy = true;
    let counter = 0;
    let endGames=false;
    let winner='none';
    let currentPlayer;
    let notOtherFreeCells =false;
    while (commandsArr.length >= 0 && !endGames && !notOtherFreeCells) {
        if (counter % 2 === 0) {
            currentPlayer = 'X';
        } else {
            currentPlayer = 'O';
        }
        counter++;
        let newLocation = commandsArr.shift();
        let row = newLocation.split(' ').map(num => Number(num))[0];
        let col = newLocation.split(' ').map(num => Number(num))[1];
        isBusy = testNextCell(matrix, row, col);
        if (isBusy) {
            console.log('This place is already taken. Please choose another!');
            counter--;
            continue;
        } else {
            matrix[row][col] = currentPlayer;
        }
        endGames =endGame(matrix,currentPlayer);
        if (endGames){
            winner = currentPlayer;
            break
        }

        if(haventOtherCells(matrix)){
            notOtherFreeCells = true;
        }
    }

         if (notOtherFreeCells){
            console.log('The game ended! Nobody wins :(');
        }else{
            console.log(`Player ${currentPlayer} wins!`);
        }
        
        for (let row = 0; row < matrix.length; row++) {
            let outArr=[];
            for(let col = 0; col<matrix[row].length; col++){
                outArr.push(matrix[row][col]);
                outArr.push('	');
            }
            outArr.pop();
            console.log(outArr.join(''));
        }



    function testNextCell(matrix, row,col,currentPlayer) {
        if (matrix[row][col] === 'X' || matrix[row][col] === 'O') {
            return true;
        } else {
            return false;
        }
    }

    function haventOtherCells(matrix){
        let counter=0;
        for (let row = 0; row < matrix.length; row++) {
            for(let col =0; col<matrix[row].length; col++){
                if (matrix[row][col]!=='X' && matrix[row][col]!== 'O'){
                    counter++
                }
            }
            if (counter>0){
                break;
            }
        }
        if (counter>0){
            return false;
        }else{
            return true;
        }
    }

    function endGame(matrix, curretPlayer) {
        if (matrix[0][0] === curretPlayer && matrix[0][1] === curretPlayer && matrix[0][2] === curretPlayer) {
            return true;
        } else if (matrix[1][0] === curretPlayer && matrix[1][1] === curretPlayer && matrix[1][2] === curretPlayer) {
            return true;
        } else if (matrix[2][0] === curretPlayer && matrix[2][1] === curretPlayer && matrix[2][2] === curretPlayer) {
            return true;
        } else if (matrix[0][0] === curretPlayer && matrix[1][0] === curretPlayer && matrix[2][0] === curretPlayer) {
            return true;
        } else if (matrix[0][1] === curretPlayer && matrix[1][1] === curretPlayer && matrix[2][1] === curretPlayer) {
            return true;
        } else if (matrix[0][2] === curretPlayer && matrix[1][2] === curretPlayer && matrix[2][2] === curretPlayer) {
            return true;
        } else if (matrix[2][0] === curretPlayer && matrix[1][1] === curretPlayer && matrix[0][2] === curretPlayer) {
            return true;
        } else if (matrix[0][0] === curretPlayer && matrix[1][1] === curretPlayer && matrix[2][2] === curretPlayer) {
            return true;
        }else{
            return false;
        }
    }

}

input(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);

input(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);


input(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);