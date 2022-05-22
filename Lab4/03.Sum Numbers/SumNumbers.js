function calc() {
    const inputOne = Number(document.getElementById('num1').value);
    const inputTwo = Number(document.getElementById('num2').value);

    const currentRes = inputOne+inputTwo;
     const result = document.getElementById('sum');
     result.value = currentRes;
}
