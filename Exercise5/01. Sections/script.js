function create(words) {
   let input = words;
   let divs = document.getElementById('content');
   document.querySelector
      for(let i=0; i< input.length; i++){
         let currentDiv = document.createElement('div');
         let p = document.createElement('p');
         let text =document.createTextNode(input[i]);
         p.style.display = 'none';
        p.appendChild(text);
         currentDiv.appendChild(p);
         divs.appendChild(currentDiv);
         divs.addEventListener('click', displayChange);


      function displayChange(event){
            event.target.children[0].style.display = 'inline';
      }
   }
}