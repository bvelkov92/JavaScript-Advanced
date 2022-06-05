function deleteByEmail() {
    
    let element = document.querySelector('input[name="email"]').value; 
    let tableAr =Array.from(document.querySelectorAll('tbody tr'));
    let result = document.getElementById('result');
    let resultMsg = 'Not found.';
    for(let row of tableAr){
        if (row.children[1].textContent== element){
            const parent = row.parentElement;
            parent.removeChild(row);
            resultMsg= "Deleted"
        }
    }
    const resultLi = document.createElement('p');
    resultLi.textContent = resultMsg;
    result.appendChild(resultLi);
}