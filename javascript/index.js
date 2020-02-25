function toggleBurgerMenu(x) {
    x.classList.toggle("change");
    var navbarList = document.getElementsByClassName("navbar-small");
    var navbar = navbarList[0];
    if (navbar.style.overflow === "hidden" || !navbar.style.overflow) {
        navbar.style.overflow = "visible";
        navbar.style.height = "150px";
    } else {
        navbar.style.overflow = "hidden";
        navbar.style.height = "1px";
    }

}
function toggleBurgerMenu(x) {
    x.classList.toggle("change");
    var burger = document.getElementsByClassName("burger");
    var burger = burger[0];
    if (burger.style.height === "60px" || !burger.style.height) {
        burger.style.height = "150px";
    } else {
        burger.style.height = "60px";
       
    }

}
