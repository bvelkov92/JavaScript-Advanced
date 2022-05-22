function colorize() {

    const currentRow = document.querySelectorAll('table tr');
for(let i = 1; i <currentRow.length; i+=2){
    currentRow[i].style.backgroundColor = 'teal';
}
}