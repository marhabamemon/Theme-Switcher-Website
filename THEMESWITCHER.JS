// ===============================
// Theme Switcher
// ===============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
} else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});