$(document).ready(function () {

    $('#slide-slick-top').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: 5000,
        nav: true,
        responsive: {
            0: {
                items: 1.5,
                nav: false
            },
            700: {
                items: 2,
                nav: false,

            },
            768: {
                items: 3,
                nav: false
            },
            991: {
                items: 4
            },

            1199: {
                items: 4,
            }
        }
    });

    $('#owl-slide-new').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: 5000,
        responsiveClass: false,
        responsive: {
            0: {
                items: 2.6,
                margin: 10
            },
            700: {
                items: 2.7,
                nav: false,
                margin: 20
            },
           
            768: {
                items: 3,
                margin: 20,
               
            },
            991: {
                items: 3,
            },
            1199: {
                items: 4,
            },
            1440: {
                margin: 20
            }
        }

    });
    
    $('#slide-display').owlCarousel({
   
        loop: true,
        responsiveClass: false,
        margin: 20,
        responsive: {
            0: {
                items: 1.5,
            },
            
        }

    });
    
})