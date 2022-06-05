function addItem() {
    
    let rows = document.getElementById('items');
    let inputRow = document.getElementById('newItemText').value;
    
    let newRow = document.createElement('li');
    newRow.textContent = inputRow;
    rows.appendChild(newRow);
}