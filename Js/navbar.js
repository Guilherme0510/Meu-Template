document.addEventListener('DOMContentLoaded', function() {
    let isVisible = true;
    let lastScrollY = 0;

    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY < lastScrollY || window.scrollY === 0) {
            isVisible = true;
        } else {
            isVisible = false;
        }

        if (isVisible) {
            navbar.classList.add('navbar-mostra');
            navbar.classList.remove('navbar-esconde');
        } else {
            navbar.classList.add('navbar-esconde');
            navbar.classList.remove('navbar-mostra');
        }

        lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
});
