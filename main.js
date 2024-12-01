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

function updateSectionOnScroll() {
    const sections = document.querySelectorAll("section, footer");
    let currentSection = "Home";
    let closestDistance = Infinity; 

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;

        const distanceToCenter = Math.abs(sectionCenter - screenCenter); 

        if (distanceToCenter < closestDistance) {
            closestDistance = distanceToCenter; 
            currentSection = section.id ? section.id.charAt(0).toUpperCase() + section.id.slice(1) : "Footer";
        }
    });

    const sectionIndicator = document.getElementById("section-indicator");
    sectionIndicator.textContent = currentSection;
}

window.addEventListener("scroll", updateSectionOnScroll);

updateSectionOnScroll();
