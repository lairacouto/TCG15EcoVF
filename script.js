var slideIndex = 0;
var slides = document.getElementsByClassName("imagens")[0].getElementsByTagName("img");

function mostrarSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(mostrarSlide, 1000); // Muda a imagem a cada 2 segundos
}

function mover(n) {
  slideIndex += n;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

mostrarSlide();

window.onscroll=function(){
  fixarMenuNoTopo();
}

const nav = document.getElementsByTagName("nav")[0]
const topoNav = nav.offsetTop;

function fixarMenuNoTopo() {
  if(window.pageYOffset >= topoNav){
    nav.classList.add('FixoNoTopo');
  }else {
    nav.classList.remove('FixoNoTopo')
  }
}
