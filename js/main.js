// ////////////read more/////

const dots = document.getElementById('dots');
const more = document.getElementById('more');
const clickLink = document.querySelector('.about_link');

clickLink.addEventListener('click', (e) => {
    e.preventDefault();

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        clickLink.innerHTML = 'Читать подробней';
        $('#more').slideToggle(700)
    } else {
        dots.style.display = 'none';
        clickLink.innerHTML = 'Скрыть';
        $('#more').slideToggle(700)
    }
})




$(document).ready(function() {
    $('.slider_wrap').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/prev.svg" alt="prev arrow"></button>',
    });




    $('.popup-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.slick-arrow').on('click', function() {
        $('.slick-active').magnificPopup({
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
    })


    $('.slick-active').magnificPopup({
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