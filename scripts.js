// scripts.js

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Scroll-to-Top button when scrolling down
window.onscroll = function() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Animate skill bars
document.addEventListener("DOMContentLoaded", function() {
    var skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach(function(skill) {
        skill.style.width = skill.getAttribute("style").split(":")[1];
    });
});
