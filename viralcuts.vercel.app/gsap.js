// Ensure that the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Check if gsap and ScrollTrigger are available
    if (window.gsap && window.gsap.registerPlugin) {
        // Register ScrollTrigger with gsap
        gsap.registerPlugin(ScrollTrigger);

        // Find all elements with the class .gsap-1
        const gsap1Elements = document.querySelectorAll(".gsap-1");

        // Create the scroll-triggered animation for each element with the class .gsap-1
        gsap1Elements.forEach((element) => {
            gsap.fromTo(
                element,
                { y: 0 },
                {
                    y: -200, // Adjust this value to control the scrolling speed
                    rotate: -5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top"
                    }
                }
            );
        });

        // Find all elements with the class .gsap-2
        const gsap2Elements = document.querySelectorAll(".gsap-2");

        // Create the scroll-triggered animation for each element with the class .gsap-2
        gsap2Elements.forEach((element) => {
            gsap.fromTo(
                element,
                { y: 0 },
                {
                    y: 50, // Adjust this value to control the scrolling speed
                    rotate: 3,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top"
                    }
                }
            );
        });

        // Find all elements with the class .gsap-3
        const gsap3Elements = document.querySelectorAll(".gsap-3");

        // Create the scroll-triggered animation for each element with the class .gsap-3 that will rotate the element by 5 degrees
        gsap3Elements.forEach((element) => {
            gsap.fromTo(
                element,
                { rotate: 0 },

                {
                    rotate: 10, // Adjust this value to control the rotation speed
                    y: -150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top"
                    }
                }
            );
        });

        // Find all elements with the class .gsap-4
        const gsap4Elements = document.querySelectorAll(".gsap-4");

        // Create the scroll-triggered animation for each element with the class .gsap-3 that will rotate the element by 5 degrees
        gsap4Elements.forEach((element) => {
            gsap.fromTo(
                element,
                { rotate: 0 },

                {
                    rotate: -5, // Adjust this value to control the rotation speed
                    y: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top"
                    }
                }
            );
        });

    } else {
        console.error("GSAP or ScrollTrigger not loaded!");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[pointer-events="none"]');

    elements.forEach(element => {
        element.style.userSelect = 'none';
        element.style.webkitUserSelect = 'none';
        element.style.MozUserSelect = 'none';
        element.style.msUserSelect = 'none';
        element.style.pointerEvents = 'none';
    });
});