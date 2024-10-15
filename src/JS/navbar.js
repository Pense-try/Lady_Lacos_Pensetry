function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Img/Img_navbar/cardapio.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Img/Img_navbar/excluir-rosa.png";
    }
}