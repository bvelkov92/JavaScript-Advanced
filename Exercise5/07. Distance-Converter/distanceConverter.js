function attachEventsListeners() {
    let [inputUnit, outputUnit] = document.querySelectorAll('select');
    document.getElementById('convert').addEventListener('click', onClick);

    function onClick() {
        let result = 0;
        let currentValue = Number(document.getElementById('inputDistance').value);
        switch (inputUnit.value) {
            case 'km':
                currentValue *= 1000;
                break;
            case 'm':
                currentValue *= 1;
                break;
            case 'cm':
                currentValue *= 0.01;
                break;
            case 'mm':
                currentValue *= 0.001;
                break;
            case 'mi':
                currentValue *= 1609.34;
                break;
            case 'yrd':
                currentValue *= 0.9144;
                break;
            case 'ft':
                currentValue *= 0.3048;
                break;
            case 'in':
                currentValue *= 0.0254;
                break;
        }
        switch (outputUnit.value) {
            case 'km':
                result = currentValue / 1000;
                break;
            case 'm':
                result = currentValue / 1;
                break;
            case 'cm':
                result = currentValue / 0.01;
                break;
            case 'mm':
                result = currentValue / 0.001;
                break;
            case 'mi':
                result = currentValue / 1609.34;
                break;
            case 'yrd':
                result = currentValue / 0.9144;
                break;
            case 'ft':
                result = currentValue / 0.3048;
                break;
            case 'in':
                result = currentValue / 0.0254;
                break;
        }

        document.getElementById('outputDistance').value = result;
    }
}
