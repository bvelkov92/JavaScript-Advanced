function attachEventsListeners() {

    let dayTray = document.getElementById('days');
    let hourTray = document.getElementById('hours');
    let minutesTray = document.getElementById('minutes');
    let secondsTray = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    document.getElementById('daysBtn').addEventListener('click', result);
    document.getElementById('hoursBtn').addEventListener('click', result);
    document.getElementById('minutesBtn').addEventListener('click', result);
    document.getElementById('secondsBtn').addEventListener('click', result);


    function convert( value, unit) {
        let day = value / rations[unit];

           return {
            daysRSL: day,
            hoursRSL: rations.hours * day,
            minutesRSL: rations.minutes * day,
            secondsRSL: rations.seconds * day
        };
       
    }

    function result(event) {
        let input = event.target.parentElement
        .querySelector('input[type="text"]');
        
       
        let time = convert(Number(input.value), input.id);
        dayTray.value = time.daysRSL;
        hourTray.value = time.hoursRSL;
        minutesTray.value = time.minutesRSL;
        secondsTray.value = time.secondsRSL;
     }
}