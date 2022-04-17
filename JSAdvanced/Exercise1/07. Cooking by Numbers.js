function input(startNumber, command1, command2, command3, command4, command5) {

    let number = Number(startNumber);

    const array = [command1, command2, command3, command4, command5];

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i];
        switch (currentCommand) {

            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = (number * 0.8).toFixed(1);
                break;
        }
        console.log(number);
    }

}

input('9', 'dice', 'spice', 'chop', 'bake', 'fillet');