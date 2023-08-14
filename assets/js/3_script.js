/* 3.1 El código debe estar en 2 archivos: pintar.html y script.js. El script debe
estar dentro de la carpeta assets/js (1 Punto).
Para obtener el puntaje debes entregar los archivos cumplimiendo la
estructura pedida en conjunto con los requerimientos de 3.2 y 3.3 */

//--------- 3.1 Funcion Original---------------
// function pintar() {
//   ele.style.backgroundColor = "yellow"
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar)

/* 3.2 Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función (1 Punto).
Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
funcionando en conjunto con el código modificado. */

//------------- 3.2 Funcion modificada utilizando funciones anonimas----------------
// const ele = document.getElementById("ele1")
//    ele.addEventListener("click", function(){
//    ele.style.backgroundColor = 'yellow'
// })

/* 3.3 Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color. (1 Punto). */

//----------- 3.3 Funcion anterior modificada agregando parametro por defecto --------------------
function pintar(color = "green") {
  ele.style.backgroundColor = color
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", function () {
  pintar(); //sin argumentos se pinta de verde (color por defecto) o
  pintar("yellow"); //con argumento se pinta de amarillo o el color indicado
})
