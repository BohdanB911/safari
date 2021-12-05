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




$(document).ready(function() {
    $('.slider_wrap').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/prev.svg" alt="prev arrow"></button>',
    });


    // const galleries = $('.slider_items');
    // galleries.each(function() {
    //     const gallery = $(this);
    //     gallery.find(':not(.slick-cloned)').children('a').magnificPopup({
    //         delegate: 'a',
    //         type: 'image',
    //         tLoading: 'Loading image #%curr%...',
    //         mainClass: 'mfp-img-mobile',
    //         gallery: {
    //             enabled: true,
    //             navigateByImgClick: true,
    //             preload: [0, 1]
    //         },
    //     });
    // });



    const a = document.getElementsByClassName('slider_items');
    for (let i = 0; i < a.length; i++) {
        if (a[i].classList.contains('slick-active')) {
            addClass(a[i])
        } else {
            removeClass(a[i])
        }
    }



    function addClass(elem) {
        elem.children[0].classList.add('slider_inner-active')
    }

    function removeClass(elem) {
        elem.children[0].classList.remove('slider_inner-active')
    }

    $('.slider_inner-active').magnificPopup({

        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
    })

});