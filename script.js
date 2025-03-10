function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    setTimeout(function(){
      let navItems=document.querySelectorAll('.nav-list');
      navItems.forEach((item, index)=>{
        item.classList.add('show');
      });
    }, 300);
  }
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  let navItems = document.querySelectorAll('.nav-list');
  navItems.forEach((item) => {
      item.classList.remove('show');
  });
}  

