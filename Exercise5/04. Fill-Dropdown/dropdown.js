function addItem() {
    document.querySelector('input[value="Add"]').addEventListener('click', addItems);
    

    function addItems(event){
        let articleName =document.getElementById('newItemText');
        let articleValue = document.getElementById('newItemValue');
        let newElement = document.createElement('option');
        newElement.textContent = articleName.value
        let menu = document.getElementById('menu');
        menu.appendChild(newElement);

        articleName.value = '';
        articleValue.value='';

    }
}