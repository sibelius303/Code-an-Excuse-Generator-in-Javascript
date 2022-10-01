/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
//};

const boton = document.getElementById("boton");

let who = ["El perro", "Mi abuela", "La tortuga", "Mi pajaro"];

let what = ["comio mi tarea", "orino mis apuntes", "choco el auto", "rompio"];

let when = [
  "antes de la clase",
  "en este momento",
  "cuando terminé",
  "durante el almuerzo",
  "mientras estaba orando"
];

function change() {
  var whoAleatorio = Math.floor(Math.random() * who.length);
  var whoDato = who[whoAleatorio];

  var whatAleatorio = Math.floor(Math.random() * what.length);
  var whatDato = what[whatAleatorio];

  var whenAleatorio = Math.floor(Math.random() * when.length);
  var whenDato = when[whenAleatorio];

  var result = whoDato + " " + "se " + whatDato + " " + whenDato;

  let excuse = document.getElementById("excuse");
  excuse.innerHTML = result;
}

change();

boton.addEventListener("click", e => {
  change();
});
