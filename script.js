function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const menuIcon = document.getElementById("menu-icon");

  if (menu.style.right === "0px") {
    menu.style.right = "-250px";  // hide menu
    menuIcon.style.display = "block"; // show menu icon
  } else {
    menu.style.right = "0px";      // show menu
    menuIcon.style.display = "none";  // hide menu icon
  }
}
