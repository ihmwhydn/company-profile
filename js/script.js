$(document).ready(function(){

  $('#owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
})

$('#owl-2').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:6
        }
    }
})

});