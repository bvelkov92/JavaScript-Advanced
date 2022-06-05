function solve() {
  let textInput = document.getElementById('input').value;
  const filtered = textInput.split('.').filter(s => s!=='');
  const outField = document.getElementById('output');

    while(filtered.length>0){
      let currentText = filtered.splice(0,3).join('. ');
      let newParagr = document.createElement('p');
      newParagr.textContent = currentText+'.';
      outField.appendChild(newParagr);
    }
}