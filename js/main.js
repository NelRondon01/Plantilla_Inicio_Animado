$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 1100,
        effect: "fade",

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

    $(".burger").click(function (e) { 
        $("header").toggleClass("active")
        if($("header").hasClass("active")){
            anime({
                targets: ".burger",
                rotate: "+=1turn",
                duration: 80,
                easing: "easeInOutQuart"
            })
        }else{
            anime({
                targets: ".burger",
                rotate: "-=1turn",
                duration: 80,
                easing: "easeInOutQuart"
            })
        }
    });
    
    swiper.on("slideChangeTransitionStart", function(){
        anime({
            targets: ".slider-right img",
            scale: [1.2, 1],
            opacity: [0, 1],
            easing: "easeInOutQuart"
        })
        anime({
            targets: ".swiper-slide-active .slider-left .element",
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150, {start: 500}),
            easing: "easeInOutQuart"
        })
    })

    anime({
        targets: "header",
        scaleX: [0, 1],
        translateX: [-400 , 0],
        opacity: [0, 1],
        easing: "easeInOutQuart"
    })
    anime({
        targets: ".logo img",
        rotate: 360,
        opacity: [0, 1],
        delay: 500,
        easing: "easeInOutQuart"
    })
    anime({
        targets: ".menu li",
        translateY: [50 , 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 700}),
        easing: "easeInOutQuart"
    })

    anime({
        targets: ".slider-right img",
        scale: [1.2, 1],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 2000, from: "last"}),
        easing: "easeInOutQuart"
    })
    anime({
        targets: ".swiper-slide-active .slider-left .element",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {start: 1700}),
        easing: "easeInOutQuart"
    })

    anime({
        targets: ".swiper-button-prev",
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: "easeInOutQuart"
    })
    anime({
        targets: ".swiper-button-next",
        translateX: [100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: "easeInOutQuart"
    })
});