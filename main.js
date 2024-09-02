const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const navlink = document.getElementsByClassName("navlinkm");
const menu = document.getElementsByClassName("headerm")[0];

openMenu.addEventListener("click", () => {
  menu.style.right = 0;
});

closeMenu.addEventListener("click", () => {
  menu.style.right = "-100%";
});

navlink.forEach((x) =>
  x.addEventListener("click", () => {
    menu.style.right = "-100%";
  })
);
