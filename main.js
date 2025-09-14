// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // ===== Smooth Scroll for Navigation =====
    const links = document.querySelectorAll('nav a[href^="#"]');

    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ===== Contact Form Validation =====
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop form from submitting

            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been received.");
            this.reset(); // Clear the form after successful submission
        });
    }

    // ===== Email Validation Helper =====
    function validateEmail(email) {
        // Simple email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

});
