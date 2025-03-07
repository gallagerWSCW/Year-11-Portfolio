function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}  

function toggleMenu() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
}