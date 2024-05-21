let menuOpened = false;

function toggleMenu() {
    let mobile_menu = document.getElementById("mobile-menu");

    if (menuOpened == false) {
        mobile_menu.style.transform = "translateY(0)"
        document.body.style.overflow = "hidden"
        menuOpened = true;
    } else {
        mobile_menu.style.transform = "translateY(-150%)"
        document.body.style.overflow = "auto"
        menuOpened = false
    }
}

function toCategory(category) {
    switch (category) {
        case "magiccapes":
            
            break;
    
        default:
            break;
    }
}

// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // scroll

// const container = document.querySelector('.slider-container')
// const objects = gsap.utils.toArray('moving-object')

// gsap.to(".moving-object", {
//     // xPercent: -100 (objects.length - 1),
//     // ease: 'none',
//     // scrollTrigger: {
//     //     trigger: 'slider-container',
//     //     pin: true,
//     //     scrub: 1,
//     //     end: "+=3000"
//     // }
//     duration: 3,
//     rotation: 360,
//     scale: 2,
//     scrollTrigger: {
//         trigger: '.slider-container',
//         markers: true,
//         scrub: true
//     }
// })