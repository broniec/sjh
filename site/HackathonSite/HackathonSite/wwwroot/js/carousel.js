var reference;

function initCarousel() {
    // add active class
    $('#link-diversity').addClass('active');
    // create the grid
    $(".h-carousel").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3
    });
    // register change event
    $('.h-carousel').on('afterChange', function (_event, _slick, currentSlide) {
        // remove active class
        $('#link-diversity').removeClass('active');
        $('#link-erg').removeClass('active');
        $('#link-events').removeClass('active');
        $('#link-salary').removeClass('active');

        if (currentSlide === 0) {
            console.log('diversity score');
            $('#link-diversity').addClass('active');
        } else if (currentSlide === 1) {
            console.log('erg');
            $('#link-erg').addClass('active');
        } else if (currentSlide === 2) {
            console.log('d&i events');
            $('#link-events').addClass('active');
        } else if (currentSlide === 3) {
            console.log('salaries');
            $('#link-salary').addClass('active');
        }

        // todo - somehow call .net back
        reference.invokeMethodAsync('UpdateContent', currentSlide);
    });
}

function cacheReference(dotNetReference) {
    reference = dotNetReference;
}
