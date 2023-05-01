// 1- Our Membership Types Slider
$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// END

// 2- Our Locations Slider
$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
});
//END

//3- Become a member Slider
// $(".one-time ").slick({
//     // dots: true,
//     // centerMode: true,
//     // arrows:false,
//     // fade:true,
//     // easing:'linear',
//     // pauseOnHover:true,
//     // pauseOnDotsHover:true,
//     // rows:2,
//     // touchMove:true,
//     // slidesToShow: 1,
//     // adaptiveHeight: true,
//     dots: true,
//     infinite: true,
//     variableWidth: truem
//     rows: 2,
//     slidesToShow: 1,
// });