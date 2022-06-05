function input({model, power, color, carriage, wheelsize }){
    
    const engineType = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    let engine;
    if (power <= 90){
        engine = engineType.small;
    }else if (power <=120){
        engine = engineType.normal;
    }else {
        engine = engineType.monster
    }

    let size = wheelsize;
    if (wheelsize % 2 === 0) {
        size--;
    }

    const car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels: [size, size, size, size]
    }

    return car;
}

const  inputed =result({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });