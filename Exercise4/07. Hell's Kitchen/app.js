function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     
      let input=JSON.parse(document.querySelector('#inputs textarea').value);
      let outputArea = document.getElementById('outputs');
      let workersArea = document.getElementById('workers');
      let output = {};
      let totalSalary = 0;
      let avgSalary= 0;
      let bestName = '';
      let currentAvgSalary = 0;
      for (let worker of input){
         let inputInfo = worker.split(' - ');
         let restName = inputInfo.shift();
         let workersInfo = inputInfo[0].split(', ');
         for(let currentWorker of workersInfo){
            let [name, salary] = currentWorker.split(' ');
            if (!output.hasOwnProperty(restName)){
               output[restName] = {};
            }
            if(output.hasOwnProperty(restName)) {
               output[restName] [name] =Number(salary);
            }
         }
      }
      let entries = Object.entries(output);
      for(let entry of entries){
            let key = entry[0];
            let values = Object.entries(entry[1]);
          
            for (let [name,salary] of values){
               totalSalary+=salary;
            }
            avgSalary = totalSalary/values.length;

            if (avgSalary>currentAvgSalary){
               currentAvgSalary =avgSalary
               bestName = key;
               totalSalary = 0;
            }

            let result = Object.entries(output[bestName]).sort((a,b)=> b[1]-a[1]);
            let print = '';


            result.forEach(w => print+=`Name: ${w[0]} With Salary: ${w[1]} `);
            document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currentAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
            document.querySelector('#workers p').textContent = print;
      }
      

   }
}