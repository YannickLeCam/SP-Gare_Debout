const btnOpenBurgerMenu = document.getElementById("openBurgerMenu");
const btnCloseBurgerMenu = document.getElementById("closeBurgerMenu");
const menu = document.getElementById("menuGen");


btnCloseBurgerMenu.addEventListener("click",()=>{
    menu.classList.remove('deroule');
    btnCloseBurgerMenu.style.display="none";
    btnOpenBurgerMenu.style.display="flex";
})

btnOpenBurgerMenu.addEventListener("click",()=>{
    menu.classList.add('deroule');
    btnOpenBurgerMenu.style.display="none";
    btnCloseBurgerMenu.style.display="flex";
})