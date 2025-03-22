document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");

    // Toggle dark mode
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // Toggle sidebar on mobile
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
});