function input (doyOfWeek){

    let day;

switch(doyOfWeek){
    case 'Monday':
        day=1;
        break
        case 'Tuesday':
        day=2;
        break
        case 'Wednesday':
        day=3;
        break
        case 'Thursday':
        day=4;
        break
        case 'Friday':
        day=5;
        break
        case 'Saturday':
        day=6;
        break
        case 'Sunday':
        day=7;
        break
        default: day = 'error';  
}
console.log(day);
}

input('Monday');
input(2);

