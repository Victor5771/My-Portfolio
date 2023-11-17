// toggle icon navbar

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Smooth scroll to section
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let targetId = link.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the current link
            document.querySelectorAll('header nav a[href*=' + id + ']').forEach(navLink => {
                navLink.classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
};
