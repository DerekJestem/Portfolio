let menuOpened = false;

function toggleMenu() {
    let mobile_menu = document.getElementById("mobile-menu");

    if (menuOpened == false) {
        mobile_menu.style.transform = "translateY(0)"
        document.body.style.overflow = "hidden"
        menuOpened = true;
    } else {
        mobile_menu.style.transform = "translateY(-150%)"
        document.body.style.overflow = "auto"
        menuOpened = false
    }
}