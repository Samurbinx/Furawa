/**-----------SLIDER------------ */
/**PARA AÑADIR O ELIMINAR NOTICIAS DEL SLIDER LEER README.TXT*/

let slideIndex = 1;
let numImgs = 5;   //CUANTAS IMAGENES HAY EN LA CARPETA

let noticias = [0,
  `
  <h1>CELEBRANDO EL PRIMER ANIVERSARIO DE TLOU</h1>
  <p>14 Diciembre 2023</p>
  `,

  `
  <h1>ACTUALIZACIÓN SOBRE THE LAST OF US ONLINE</h1>
  <p>23 Junio 2023</p>
  `,

  `
  <h1>SE ANUNCIA PRÓXIMO LANZAMIENTO RDR II</h1>
  <p>1 Febrero 2024</p>`,

  `
  <h1>UNCHARTED YA A LA VENTA</h1>
  <p>15 Febrero 2024</p>`,

  `
  <h1>PRIMER TRAILER RDR II YA DISPONIBLE</h1>
  <p>17 Febrero 2024</p>`
]

function chFocus(n) {
  if (n == -1 && slideIndex <= 1) {
    slideIndex = numImgs+1;
  } else if (n == 1 && slideIndex > numImgs) {
    slideIndex = 1;
  }
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let index = n;
  
  for (let i = 1; i < 4; i++) { //Itera los 3 huecos del slider

    if (index > numImgs) {
      index = 1;
    }

    
    let img = document.getElementById(`s${i}`)
    img.style.backgroundImage = `url('img/slider/s${index}.png')`;
    
    if (i == 2) {     // Caambia el texto de la noticia
      document.getElementById("infoSlider").innerHTML = noticias[index];
    } else {
    }
    
    index++
  }
  

}

showSlides(slideIndex)

function autoSlider(){
  chFocus(1)
}

setInterval(autoSlider,10000)

// Al pulsar el la noticia actual del slider abre una nueva ventana con la pñágina de noticias anclada a la noticia correspondiente
function urlNews() {
  if (slideIndex == 1) {
    window.open(`../noticias.html#portada`)
  } else {
    window.open(`../noticias.html#s${slideIndex}`)
  }
}