/*CAMBIO ICONO MENU HAM*/
function cambiarIcono(x){
  x.classList.toggle("fa-xmark");
}

/*MENU ACORDEÓN*/
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
