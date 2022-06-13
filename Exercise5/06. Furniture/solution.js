function solve() {

  [...document.querySelectorAll('button')]
  .forEach(butt=> butt.addEventListener('click', execute));


  let input = document.querySelectorAll('textarea');
  let table = document.querySelector('tbody');

  function execute(butt) {

    if (!input[0].value) {
      return;
    }

    if (butt.target.textContent === 'Generate') {
    let text = JSON.parse(input[0].value);
    text.forEach(furniture => {
      table.innerHTML += `<tr>
      <td><img src=${furniture.img}></td>
      <td><p>${furniture.name}</p></td>
      <td><p>${furniture.price}</p></td>
      <td><p>${furniture.decFactor}</p></td>
      <td><input type="checkbox"/></td>
      </tr>`
    });
  }else{
    let checkeds = document.querySelectorAll('input:checked')
    let avgDecFactor = 0;
    let totalSum = 0;
    let furnName = [];

    [...document.querySelectorAll('input:checked')].forEach(art => {
      let parent = art.parentNode.parentNode;
      avgDecFactor += Number(parent.children[3].textContent);
      totalSum += Number(parent.children[2].textContent);
      furnName.push(parent.children[1].textContent);
    });

    let outputIndex = input.length-1;
    input[outputIndex] .textContent += `Bought furniture: ${furnName.join(', ')}\n`;
    input[outputIndex] .textContent += `Total price: ${totalSum.toFixed(2)}\n`;
    input[outputIndex] .textContent += `Average decoration factor: ${avgDecFactor / furnName.length}`;
    }
  }
}
