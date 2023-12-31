let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');

};
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        }
    });

    menuIcon.classList.remove('bx bx-x');
    navbar.classList.remove('active');
};
