function attachGradientEvents() {

    const grad = document.getElementById('gradient');
    grad.addEventListener('mousemove', position);
    let result = document.getElementById('result');

    function position (ev){
        result.textContent = Math.floor(ev.offsetX / grad.clientWidth * 100) + '%'
    }
}