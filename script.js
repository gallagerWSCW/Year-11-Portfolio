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
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const sideObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('side-show');
    } else {
      entry.target.classList.remove('side-show');
    }
  });
});
const sideElements=document.querySelectorAll('.side-hidden');
sideElements.forEach((el)=>sideObserver.observe(el));


