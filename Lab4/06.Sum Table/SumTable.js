function sumTable() {

    const numberArr = document.querySelectorAll('table tr');
    let sums = 0;
    for(let i =1; i<numberArr.length-1; i++){
        let currentArr = numberArr[i].lastElementChild;
        let number = Number(currentArr.textContent);
        sums+=number;
    }
    const result = document.getElementById('sum').textContent = sums;
}