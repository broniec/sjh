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
            variableWidth: true,
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
        console.log('diversity info');
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

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let chartsInitialized = false;

function initCharts(data) {
    if (true) {
        const ethnicGroups = data.filter(x => x.group !== "Men" && x.group !== "Women").map(x => x.group).filter(onlyUnique);   
        const genderLabels = ['Male', 'Female'];
        const yearLabels = data.map(x => x.year).filter(onlyUnique).sort();
        const standardOptions = {
            legend: {
                display: false
            },
        };
        const lineGraphOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

        // Current Year Gender
        const currentYearFemaleAmount = data.filter(x => x.group === "Women" && x.year === 2019).map(x => x.percentage);
        const data1 = {
            datasets: [{
                data: [100 - currentYearFemaleAmount, currentYearFemaleAmount],
                backgroundColor: [
                    'rgb(232, 237, 223)',
                    'rgb(42, 61, 69)'
                ]
            }],
            labels: genderLabels
        };
        const ctx1 = document.getElementById('currentYearGenderBreakdown').getContext('2d');
        new Chart(ctx1, {
            type: 'doughnut',
            data: data1,
            options: standardOptions
        });
        // Historic Gender
        const historicFemaleAmount = data.filter(x => x.group === "Women").map(x => x.percentage);
        const data2 = {
            datasets: [{
                data: historicFemaleAmount,
                borderColor: [
                    'rgb(42, 61, 69)'
                ],
                fill: false,
                label: 'Women'
            }],
            labels: yearLabels
        };
        const ctx2 = document.getElementById('historicGenderBreakdown').getContext('2d');
        new Chart(ctx2, {
            type: 'line',
            data: data2,
            options: lineGraphOptions
        });
        // Current Year Ethnicity
        const currentYearEthnicGroups = data.filter(x => x.group !== "Men" && x.group !== "Women" && x.year === 2019).map(x => x.percentage);
        const data3 = {
            datasets: [{
                data: currentYearEthnicGroups,
                backgroundColor: [
                    'rgb(232, 237, 223)',
                    'rgb(42, 61, 69)'
                ]
            }],
            labels: ethnicGroups
        };
        const ctx3 = document.getElementById('currentYearEthnicityBreakdown').getContext('2d');
        new Chart(ctx3, {
            type: 'doughnut',
            data: data3,
            options: standardOptions
        });
        // Historic Ethnicity
        const data4 = {
            datasets: [{
                data: [10, 20],
                backgroundColor: [
                    'rgb(232, 237, 223)',
                    'rgb(42, 61, 69)'
                ]
            }],
            labels: ethnicGroups
        };
        const ctx4 = document.getElementById('historicEthnicityBreakdown').getContext('2d');
        new Chart(ctx4, {
            type: 'line',
            data: data4,
            options: lineGraphOptions
        });

        chartsInitialized = true;
    }
}
