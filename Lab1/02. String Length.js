function strLength(fistInput,secondInput,thirdInput){

    let firstInputChars = fistInput.length;
    let secondInputChars = secondInput.length;
    let thirdInputChars = thirdInput.length;
    let totalLength = firstInputChars+secondInputChars+thirdInputChars;
    let averageNumber = Math.round(totalLength/3);
    console.log(totalLength);
    console.log(averageNumber);
}