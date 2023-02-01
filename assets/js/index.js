let menuMobile = document.querySelector(".menu-mobile");
let menuMobileImg = document.querySelector("#img");
let menuDsktp = document.querySelector(".menu-options");

menuMobile.addEventListener("click", (e)=> {
    
    if(menuMobileImg.getAttribute('src') == "assets/images/icon-menu.svg"){
        menuMobileImg.setAttribute('src', "assets/images/icon-menu-close.svg");
    } else {
        menuMobileImg.setAttribute('src', "assets/images/icon-menu.svg");
    }   

    menuMobile.style
    if(menuDsktp.style.display == 'flex'){
        menuDsktp.style.display = 'none';
    } else {
        menuDsktp.style.display = 'flex';
    }
});

