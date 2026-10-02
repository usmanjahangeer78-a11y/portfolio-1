```javascript
// ========================================
// USMAN JAHANGEER - PORTFOLIO JAVASCRIPT
// ========================================

// Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}

// Close Mobile Menu
function closeMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.remove("active");
}


// Close menu when clicking outside
document.addEventListener("click", function (event) {

    const navLinks = document.getElementById("navLinks");
    const menuButton = document.querySelector(".menu-btn");

    if (
        navLinks &&
        menuButton &&
        !navLinks.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        navLinks.classList.remove("active");
    }

});


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            closeMenu();
        }

    });

});


// Navbar shadow when scrolling
window.addEventListener("scroll", function () {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(52, 37, 28, 0.10)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// Current year in footer
const yearElement = document.querySelector("footer span");

if (yearElement) {
    // Keeps your footer year automatically updated
    const currentYear = new Date().getFullYear();

    // Only replace the year if the element contains "2026"
    if (yearElement.parentElement.textContent.includes("2026")) {
        yearElement.parentElement.innerHTML =
            yearElement.parentElement.innerHTML.replace(
                "2026",
                currentYear
            );
    }
}


// Reveal sections while scrolling
const sections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


// Prepare sections for animation
sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(section);

});


// Contact button message
const contactButton = document.querySelector(
    '.contact .btn'
);

if (contactButton) {

    contactButton.addEventListener("click", function () {

        console.log(
            "Thanks for visiting Usman Jahangeer's portfolio!"
        );

    });

}
```
