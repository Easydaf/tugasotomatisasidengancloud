// Get elements
const haloBtn = document.getElementById("haloBtn");
const haloText = document.getElementById("haloText");

// Add click event listener
haloBtn.addEventListener("click", function () {
  // Toggle the hidden class
  haloText.classList.toggle("hidden");
  haloText.classList.toggle("show");

  // Add haptic feedback if available
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
});

// Optional: Hide text when clicking outside
document.addEventListener("click", function (event) {
  if (event.target !== haloBtn && event.target !== haloText) {
    if (!haloText.classList.contains("hidden")) {
      haloText.classList.add("hidden");
      haloText.classList.remove("show");
    }
  }
});

// Add keyboard support - press Enter to toggle
haloBtn.addEventListener("keypress", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    haloBtn.click();
  }
});
