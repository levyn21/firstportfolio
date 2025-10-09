const slider = document.querySelector('.slider');
const landing = document.querySelector('landing');
let sliderInterval;

function runSlider() {
    const active = slider.querySelector('img.active')
    active.classList.remove('active')

    const next = active.nextElementSibling || slider.firstElementChild
    next.classList.add('active')
}

landing.addEventListener('mouseenter', function() {
    sliderInterval = setInterval(runSlider, 3000);
});

landing.addEventListener('mouseleave', function() {
    clearInterval(sliderInterval);
});