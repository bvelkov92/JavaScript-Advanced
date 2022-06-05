function solve() {

  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const resultField = document.getElementById('result');
  let result = '';
  const input = text.split(" ");
  if (convention == 'Camel Case') {
    for (let i = 0; i < input.length; i++) {
      if (i > 0) {
        result += input[i][0].toUpperCase() + input[i].slice(1, input[i].length).toLowerCase();
      } else {
        result += input[i][0].toLowerCase() + input[i].slice(1, input[i].length).toLowerCase();
      }
    }
    resultField.textContent = result;
  } else if (convention== 'Pascal Case') {
    for (let i = 0; i < input.length; i++) {
      result += input[i][0].toUpperCase() + input[i].slice(1, input[i].length).toLowerCase();
    }
    resultField.textContent = result;
  } else {
    result = 'Error!';
    resultField.textContent = result;
  }

 
}