function toggleBurgerMenu(x) {
    x.classList.toggle("change");
    var navbarList = document.getElementsByClassName("navbar-small");
    var navbar = navbarList[0];
    if (navbar.style.visibility === "hidden" || !navbar.style.visibility) {
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
    } else {
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
    }

}