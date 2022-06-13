function lockedProfile() {
    let userOne = document.querySelector('input[name="user1Locked"]');
    let userTwo = document.querySelector('input[name="user2Locked"]');
    let userThree = document.querySelector('input[name="user2Locked"]');

    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));



    function onClick (event){
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[value ="unlock"]').checked;
        if (isActive){
            let info = Array.from(profile.querySelectorAll('div'));
            let finded = info.find(el=> el.id.includes('HiddenFields'));
            if (event.target.textContent ==="Show more"){
                   finded.style.display = 'inline-block';
                   event.target.textContent = 'Hide it';
            }else{
                finded.style.display = '';
                   event.target.textContent = 'Show more';
            }
        }
    }
}