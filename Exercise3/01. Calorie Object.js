function input (data){

    let calories = {};
    for(let index=0; index<data.length; index+=2){     
        calories[data[index]] = Number(data[index+1]) 
  }

  console.log(calories);
}

  datas(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);