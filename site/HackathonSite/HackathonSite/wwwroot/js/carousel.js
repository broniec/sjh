
function initCarousel() {
    // create the grid
    $(".h-carousel").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3
    });
    // register change event
    $('.h-carousel').on('afterChange', function (_event, _slick, currentSlide) {
        const currentUrl = window.location.href;
        // todo - parse this out so I can extract the id
        const id = 0;

        if (currentSlide === 0) {
            console.log('diversity score');
            window.location.href = '/company/0/diversity';
        } else if (currentSlide === 1) {
            console.log('erg');
            window.location.href = '/company/0/erg';
        } else if (currentSlide === 2) {
            console.log('d&i events');
            window.location.href = '/companys/0/events';
        } else if (currentSlide === 3) {
            console.log('salaries');
            window.location.href = '/company/0/salary';
        }
    });
}
