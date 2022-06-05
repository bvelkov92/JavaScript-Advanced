function search() {
   const townsArr=  Array.from(document.querySelectorAll("ul li"));
   const searching = document.getElementById('searchText').value;
   let matches =0;
  townsArr.forEach((el)=>{
   if (el.innerHTML.includes(searching)){
      el.style.fontWeight="bold";
      el.style.textDecoration = "underline";
      matches++;
   }else{
      el.style.fontWeight="normal";
      el.style.textDecoration = "";
   }
  });

   document.getElementById('result').textContent = `${matches} matches found`;  
}
