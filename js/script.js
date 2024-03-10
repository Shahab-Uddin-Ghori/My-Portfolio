/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',
{ origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img',
{ origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content',
{ origin: 'left' });

/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Mern Developer', 'Freelancer', 'Teacher','Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const type2 = new Typed('.about-me', {
    strings: ['Focused' , 'Passionate' , 'Quick Learner' , 'Team Leader'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*==================== DOWNLOAD CV ====================*/

document.getElementById('downloadLink').addEventListener('click', function() {
    // Create an invisible anchor element
    var downloadAnchor = document.createElement('a');
    
    // Set the download link attributes (replace 'your-cv.pdf' with your file details)
    downloadAnchor.setAttribute('href', 'path/to/your/cv.pdf');
    downloadAnchor.setAttribute('download', 'your-cv.pdf');
    
    // Append the anchor to the body
    document.body.appendChild(downloadAnchor);
    
    // Trigger a click on the anchor to initiate the download
    downloadAnchor.click();
    
    // Remove the anchor from the body
    document.body.removeChild(downloadAnchor);
});
