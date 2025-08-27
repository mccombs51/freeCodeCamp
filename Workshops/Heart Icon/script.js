document.addEventListener('DOMContentLoaded', function () {
    const heart = document.querySelector('.heart-icon');

    heart.addEventListener('click', function () {
        heart.classList.toggle('purple');
    });
});