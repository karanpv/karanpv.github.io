const rootElement = document.documentElement;
const rocket = document.querySelector('.to_home');

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

rocket.addEventListener('click', scrollToTop);
