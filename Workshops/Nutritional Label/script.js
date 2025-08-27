document.addEventListener('DOMContentLoaded', function () {
    const label = document.querySelector('.label');
    const h1 = document.querySelector('header h1');
    const LG = document.querySelector('.large');
    
    h1.addEventListener('click', function () {
        label.classList.toggle('cyan');
    });
    
    LG.addEventListener('click', function () {
        label.classList.toggle('green');
    });
});