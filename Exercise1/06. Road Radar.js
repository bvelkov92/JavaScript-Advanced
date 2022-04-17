function input(speed, area) {

    const maxSpeedMotorWay = Number(130);
    const maxSpeedInterstate = Number(90);
    const maxSpeedCity = Number(50);
    const maxSpeedResidentionArea = Number(20);
    let message;
    let status;

    switch (area) {
        case 'motorway':
            if (speed<=maxSpeedMotorWay){
                message = `Driving ${speed} km/h in a ${maxSpeedMotorWay} zone`;
            }else{
                status= inputDiff(speed-maxSpeedMotorWay);
                message = `The speed is ${Math.abs(maxSpeedMotorWay-speed)} km/h faster than the allowed speed of ${maxSpeedMotorWay} - ${status}`
            }
            break;
        case 'interstate':
            
            if (speed<=maxSpeedInterstate){
                message = `Driving ${speed} km/h in a ${maxSpeedInterstate} zone`;
            }else{
                status= inputDiff(speed-maxSpeedInterstate);
                message = `The speed is ${Math.abs(maxSpeedInterstate-speed)} km/h faster than the allowed speed of ${maxSpeedInterstate} - ${status}`
            }
            break;
        case 'city':
            if (speed<=maxSpeedCity){
                message = `Driving ${speed} km/h in a ${maxSpeedCity} zone`;
            }else{
                status= inputDiff(speed-maxSpeedCity);
                message = `The speed is ${Math.abs(maxSpeedCity-speed)} km/h faster than the allowed speed of ${maxSpeedCity} - ${status}`
            }
            break;
        case 'residential':
            if (speed<=maxSpeedResidentionArea){
                message = `Driving ${speed} km/h in a ${maxSpeedResidentionArea} zone`;
            }else{
                status= inputDiff(speed-maxSpeedResidentionArea);
                message = `The speed is ${Math.abs(maxSpeedResidentionArea-speed)} km/h faster than the allowed speed of ${maxSpeedResidentionArea} - ${status}`
            }
            break;
    }
    function inputDiff(speedDif){
        if (speedDif<=20){
            return 'speeding';
        }else if(speedDif<=40){
            return 'excessive speeding';
        }else{
            return 'reckless driving';
        }
    }

    console.log(message);
}


input(120, 'interstate');