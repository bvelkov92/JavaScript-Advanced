function input(year,month,day){
    
     let currentDate = `${year}-${month}-${day}`;
    let date = new Date(currentDate);

    date.setDate(date.getDate()-1);


    let outYear = date.getFullYear();
    let outMonth = date.getMonth()+1;
    let outDay = date.getDate();
    

    console.log(`${outYear}-${outMonth}-${outDay}`);
}
input(2016, 9, 30);
