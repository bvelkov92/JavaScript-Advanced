function input (information){

    if (information.dizziness === true){
    information.levelOfHydrated += information.weight*information.experience;
    information.dizziness = false;
    }

   return information;
}
let worker = result({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
);
console.log(worker);