import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

let testbox = document.getElementById("testbox");

gsap.to(testbox, {
    duration: 3,
    rotationSpeed: 360,
    scale: 2,
    translateX: 100,
    scrollTrigger: {
        trigger: testbox,
        markers: true,
        scrub: true
    }
})