var menuSou=document.querySelector(".menu_sou");
var menuListBox=document.querySelector(".menu_list_box");
var menuList=document.querySelectorAll(".menu_list");
var menussNow=document.querySelector(".menu_ssNow");
menussNow.addEventListener("touchstart",function () {
    menuListBox.style.display="block";
    menuSou.innerHTML="&#xe607;";
});
menuSou.addEventListener("touchstart",function () {
    menuListBox.style.display="none";
    menuSou.innerHTML="&#xe605;";
})

