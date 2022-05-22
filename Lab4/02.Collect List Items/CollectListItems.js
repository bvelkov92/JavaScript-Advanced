function extractText() {
    let upElms = document.getElementById('items').children;
let downElms = document.getElementById('result');
let newArr = [];
for( let es of Array.from(upElms)){
    newArr.push(es.textContent);
}
downElms.textContent = newArr.join(`\n`);
}