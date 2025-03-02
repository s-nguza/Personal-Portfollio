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
// Form validation for the contact form
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        event.preventDefault();  // Prevent form submission
        alert('Please fill out all fields before submitting the form.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const introText = document.querySelector(".intro p");

    function restartAnimation() {
        introText.style.animation = "none";  // Remove animation
        void introText.offsetWidth;  // Trigger reflow (forces the browser to restart the animation)
        introText.style.animation = "typing 4s steps(40, end) forwards, blink 0.7s infinite";
    }

    // Detect when the section is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    restartAnimation(); // Restart animation when section appears
                }
            });
        },
        { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    observer.observe(document.querySelector("#home"));
});
