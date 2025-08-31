document.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector('.name') ;
    const NP = document.querySelector('.newspaper') ;

    name.addEventListener('click', function () {
        NP.classList.toggle('black');
    });
});