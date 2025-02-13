function toggleMenu(){
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let scrollIndex = 0;
const projectRow = document.querySelector(".projects");
const projectCards = document.querySelectorAll(".project-card");
const cardWidth = projectCards[0].offsetWidth + 20; // Account for margins
const maxScroll = Math.ceil(projectCards.length / 3) - 1;

function scrollProjects(direction) {
    scrollIndex += direction;
    
    if (scrollIndex < 0) scrollIndex = maxScroll;
    if (scrollIndex > maxScroll) scrollIndex = 0;

    // Ensure full width scroll per 3 cards
    projectRow.style.transform = `translateX(-${scrollIndex * cardWidth * 3}px)`;
}

