document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".moving-object", {
        ease: "linear",
        translateX: -500,
        scrollTrigger: {
            trigger: ".sliders",
            scrub: true
        }
    })
});