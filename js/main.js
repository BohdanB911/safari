// popup_about

const playBtn = document.querySelector(".play_img");
const popup = document.querySelector('.popup_wrap');
const closeBtn = document.querySelector(".close_btn");
const body = document.querySelector("body");
const video = document.querySelector(".video");

playBtn.addEventListener('click', () => {
    video.src = 'https://www.youtube.com/embed/y1uRk8kgVh4';
    setTimeout(() => {
        popup.classList.add("show");
        body.classList.add("no-scroll");
    }, 400)

});

closeBtn.addEventListener("click", () => {
    setTimeout(() => {
        video.src = '';
        popup.classList.remove("show");
        body.classList.remove("no-scroll");
    }, 300)
});

// ////////////read more/////

const dots = document.getElementById('dots');
const more = document.getElementById('more');
const clickLink = document.querySelector('.about_link');

clickLink.addEventListener('click', (e) => {
    e.preventDefault()
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        clickLink.innerHTML = 'Читать подробней';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        clickLink.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }
})