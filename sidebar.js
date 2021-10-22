window.onload = () => {
    const menuOpen = document.querySelector(".top-nav .menu-open");
    const menuClose = document.querySelector(".top-nav .menu-close");
    const menuWrapper = document.querySelector(".top-nav .menu-wrapper");
    //const topBannerOverlay = document.querySelector(".top-banner-overlay");

    function toggleMenu() {
    menuOpen.addEventListener("click", () => {
        menuWrapper.classList.add("is-opened");
        //topBannerOverlay.classList.add("is-moved");
    });
    
    menuClose.addEventListener("click", () => {
        menuWrapper.classList.remove("is-opened");
        //topBannerOverlay.classList.remove("is-moved");
    });
    }

    toggleMenu();
}