// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const introText = document.querySelector(".intro p");

//     function restartAnimation() {
//         introText.style.animation = "none";  // Remove animation
//         void introText.offsetWidth;  // Trigger reflow (forces the browser to restart the animation)
//         introText.style.animation = "typing 4s steps(40, end) forwards, blink 0.7s infinite";
//     }

//     // Detect when the section is in view
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     restartAnimation(); // Restart animation when section appears
//                 }
//             });
//         },
//         { threshold: 0.5 } // Trigger when at least 50% of the section is visible
//     );

//     observer.observe(document.querySelector("#home"));
// });

document.addEventListener("DOMContentLoaded", function () {
    const badges = document.querySelectorAll(".badge-container img");
    const skillsSection = document.querySelector("#skills");

    function showBadges() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100; // Adjust trigger point

        if (sectionTop < triggerPoint) {
            badges.forEach((badge, index) => {
                setTimeout(() => {
                    badge.classList.add("show");
                }, index * 200); // Delay each badge appearance
            });
        }
    }

    window.addEventListener("scroll", showBadges);
});