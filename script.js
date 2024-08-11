let navToggle = document.getElementsByClassName("nav-toggle")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
let heroContent = document.getElementsByClassName('hero-content')[0];

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");

    if (navLinks.classList.contains('active')) {
        heroContent.classList.add('dimmed');
    } else {
        heroContent.classList.remove('dimmed');
    }
})

AOS.init({
    duration: 1000,
    once: true
  });
