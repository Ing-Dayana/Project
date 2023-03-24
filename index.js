//
document.getElementById("open-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
});



//

//SCROLL UP//
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Initiate the wowjs
new WOW().init();

////
function downloadPDF() {
    const url = './assets/Dayana-IT-Project-Manager.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dayana-IT-Project-Manager.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
////
function cambiarIdioma(idioma) {
    var idiomaSeleccionado = idioma;
    if (idiomaSeleccionado === 'es') {
        window.location.href = 'index.es.html';
    } else {
        window.location.href = 'index.html';
    }
}