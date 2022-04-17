function input(studentSteps,metersPerStep, studentSpeedKmPerHour){

    let distanceInKMs = studentSteps*metersPerStep/1000;
    let additionalTime = Math.floor((distanceInKMs*1000)/500);
    let neededTime = (distanceInKMs/studentSpeedKmPerHour*3600)+additionalTime*60;
    let neededHours = Math.floor(neededTime/3600).toFixed(0).padStart(2, '0');
    let neededMinutes = Math.floor((neededTime%3600)/60).toFixed(0).padStart(2, '0');
    let seconds =(neededTime%60).toFixed(0).padStart(2, '0');

        console.log(`${neededHours}:${neededMinutes}:${seconds}`);
}

input(2564, 0.70, 5.5);