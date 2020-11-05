var reference;

function initCarousel() {
    if ($('.h-carousel').not('.slick-initialized').length) {
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
            triggerX(currentSlide);
        });
        // going to try to register click handlers
        $('#link-diversity').click(function () {
            triggerX(0);
        });
        $('#link-erg').click(function () {
            triggerX(1);
        });
        $('#link-events').click(function () {
            triggerX(2);
        });
        $('#link-salary').click(function () {
            triggerX(3);
        });
    }
}

function cacheReference(dotNetReference) {
    reference = dotNetReference;
}

function triggerX(currentSlide) {
    // remove active class
    $('#link-diversity').removeClass('active');
    $('#link-erg').removeClass('active');
    $('#link-events').removeClass('active');
    $('#link-salary').removeClass('active');

    $('.h-carousel').slick('goTo', currentSlide);

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

    // call .net back through reference shuffling
    reference.invokeMethodAsync('UpdateContent', currentSlide);
}
