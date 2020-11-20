// 1st sollution to animate menu-btn 
// function transformNavBar(x) {
//     x.classList.toggle("change");
// }

// 2nd sollution to animate menu-btn and to open and hide menu items
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav-bar ul");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("change");
    menuItems.classList.toggle("open");
});