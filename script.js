const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".nav-link");

// Open menu
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.style.display = "block";
});

// Close menu
function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.style.display = "none";
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Set active link when clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    closeMenu();
  });
});

// Highlight active section on scroll
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});



const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(el => observer.observe(el));