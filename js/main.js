$('.owl-carousel').owlCarousel({
    loop:true,
    margin:7,//margin entre as img
    nav:false,//navegador embaixo
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})