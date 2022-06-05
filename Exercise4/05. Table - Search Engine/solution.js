function solve() {
   document.querySelector('#searchBtn').addEventListener("click", onClick);
   let search = document.getElementById('searchField');
   let tableArr = document.querySelectorAll('tbody tr');
   function onClick() {
      for (let row of tableArr) {
         row.classList.remove('select')
         if (search.value !== '' && row.innerHTML.includes(search.value)) {
            row.className = 'select';
         }
      }
   }
}