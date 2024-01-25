document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenuButton.addEventListener('click', function (event) {
        event.stopPropagation();
        navList.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = navList.contains(event.target);
        const isClickOnMenuButton = mobileMenuButton.contains(event.target);

        if (isClickInsideNav && !isClickOnMenuButton) {
            navList.classList.remove('show');
        }
    });
});
