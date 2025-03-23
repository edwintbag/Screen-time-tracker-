// Sidebar toggle
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");

    // Apply dark mode if it was enabled before
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Attach event listener to the dark mode button
    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Screen Time Tracking
    const screenTimeEl = document.getElementById("screen-time");
    const alertMsgEl = document.getElementById("alert-msg");
    const dailyLimit = 2 * 60 * 60; // 2 hours in seconds
    let screenTime = Math.floor(Math.random() * 4 * 60 * 60); // Simulated screen time

    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    }

    function updateScreenTime() {
        screenTimeEl.textContent = formatTime(screenTime);

        if (screenTime > dailyLimit) {
            alertMsgEl.textContent = "⚠️ Daily limit exceeded!";
            alertMsgEl.style.color = "red";
        } else {
            alertMsgEl.textContent = "No alerts yet";
            alertMsgEl.style.color = "green";
        }
    }

    updateScreenTime();

    // Chart.js for Daily and Weekly Trends
    const dailyCtx = document.getElementById("dailyChart").getContext("2d");
    const weeklyCtx = document.getElementById("weeklyChart").getContext("2d");

    const dailyChart = new Chart(dailyCtx, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Daily Screen Time (hours)",
                data: [2.5, 3, 1.5, 2, 4, 3.5, 2.2], // Example data
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } }
        }
    });

    const weeklyChart = new Chart(weeklyCtx, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                label: "Weekly Screen Time (hours)",
                data: [15, 12, 18, 14], // Example data
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });
});
