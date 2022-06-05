function addItem() {
    
    let rows = document.getElementById('items');
    let inputRow = document.getElementById('newItemText');
    
    let newRow = document.createElement('li');
    let button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    newRow.textContent = inputRow.value;
    newRow.appendChild(button);
    rows.appendChild(newRow);
    button.addEventListener('click', deleteElement);
    inputRow.value = '';

    function deleteElement(event){
     rows.removeChild(newRow);    
    }
}
