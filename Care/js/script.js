const body = document.querySelector('body'),
    navMenu = body.querySelector('.menu-content'),
    navOpenBtn = body.querySelector('.navOpen-btn'),
    navCloseBtn = navMenu.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        // Use GSAP for the animation
        gsap.to(navMenu, {
            duration: 0.5,
            right: "0%",
            ease: "power3.out"
        });
        body.style.overflowY = "hidden";
    })
}

if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        // Use GSAP for the animation
        gsap.to(navMenu, {
            duration: 0.5,
            right: "-100%",
            ease: "power3.in"
        });
        body.style.overflowY = "scroll";
    })
}

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 5) {
        document.querySelector("header").classList.add("header-active");
    } else {
        document.querySelector("header").classList.remove("header-active");
    }
});

// Scroll UP 

const scrollUpBtn = document.querySelector('.scrollUp-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        scrollUpBtn.classList.add("scrollUpBtn-active");
    } else {
        scrollUpBtn.classList.remove("scrollUpBtn-active");
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

