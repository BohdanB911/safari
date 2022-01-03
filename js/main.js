// burger
const burger = document.querySelector('.burger_btn');
burger.addEventListener('click', function() {
    const showMenu = document.querySelector('.header_adaptive-nav');
    const body = document.querySelector('body');

    showMenu.classList.toggle('header_adaptive-nav--active');
    body.classList.toggle('no-scroll');
});

$(document).ready(function() {
    // ///////////////light scroll///

    $('.header_btn').on('click', function(e) {
        e.preventDefault()
        const form = document.querySelector('.reservation_section')
        form.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    });

    // ////////////read more/////

    const dots = document.getElementById('dots');
    const clickLink = document.querySelector('.about_link');

    clickLink.addEventListener('click', (e) => {
        e.preventDefault();

        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            clickLink.innerHTML = 'Читать подробней';
            $('#more').slideToggle(500)
        } else {
            dots.style.display = 'none';
            clickLink.innerHTML = 'Скрыть';
            $('#more').slideToggle(500)
        }
    });


    $('.slider_wrap').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/prev.svg" alt="prev arrow"></button>',
    });


    $('.slick-arrow').on('click', function() {
        $('.slick-active').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            closeOnBgClick: false,
            tClose: 'Close (Esc)',
            autoFocusLast: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
        })
    })


    $('.slick-active').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnBgClick: false,
        tClose: 'Close (Esc)',
        autoFocusLast: false,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
    })

});