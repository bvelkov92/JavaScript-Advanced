function input (array){

    let townObj = {};

    for (const iterator of array) {
        let [townName ,productName, price] = iterator.split(' | ');

        if (!townObj.hasOwnProperty(productName)){
              townObj[productName] = {};  
        }

        if (!townObj[productName].hasOwnProperty(townName)){
            townObj[productName][townName]=Number.MAX_SAFE_INTEGER;
        }else{
            townObj[productName][townName]=Number(price);
        }

        let oldPrice = Object.values(townObj[productName])[0];
        if (oldPrice>=Number(price)){
            townObj[productName][townName] = Number(price);
        }

        Object.keys(townObj).forEach(el => {
            const sorted = Object.entries(townObj[el]).sort((a, b) => a[1] - b[1]);
            const city = sorted[0][0];
            const price = sorted[0][1];
            console.log(`${el} -> ${price} (${city})`);
        });
    }
}

array(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);