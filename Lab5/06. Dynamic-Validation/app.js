function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', checkEmail);

    function checkEmail({ target }) {
        let regex =/^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error');
        }
    }
}