console.log('Custom JS Loaded');

window.addEventListener("hashchange", () => {
    const sectionIndicator = document.getElementById("section-indicator");
    const currentHash = window.location.hash.replace("#", "") || "Home"; 
    sectionIndicator.textContent = currentHash.charAt(0).toUpperCase() + currentHash.slice(1);
    console.log('hashchange');
});

document.addEventListener("DOMContentLoaded", () => {
    const sectionIndicator = document.getElementById("section-indicator");
    const currentHash = window.location.hash.replace("#", "") || "Home"; 
    sectionIndicator.textContent = currentHash.charAt(0).toUpperCase() + currentHash.slice(1);
});

const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname;

navLinks.forEach(link => {
  if (link.href.includes(currentUrl)) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

function updateSectionOnScroll() {
    const sections = document.querySelectorAll("section");
    let currentSection = "Home";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = section.id.charAt(0).toUpperCase() + section.id.slice(1);
        }
    });

    const sectionIndicator = document.getElementById("section-indicator");
    sectionIndicator.textContent = currentSection;
}


window.addEventListener("scroll", updateSectionOnScroll);


updateSectionOnScroll();
