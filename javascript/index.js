function toggleBurgerMenu(x) {
    x.classList.toggle("change");
    var navbarList = document.getElementsByClassName("navbar-small");
    var navbar = navbarList[0];
    if (navbar.style.display === "none" || !navbar.style.display) {
        navbar.style.display = "block";
      } else {
        navbar.style.display = "none";
      }

}