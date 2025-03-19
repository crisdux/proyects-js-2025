// 1. Cambio de texto : Escribe una función que cambie el texto del párrafo con la clase text cuando se haga clic en el botón con el ID btn-change-text.

const buttonChangeText = document.querySelector("#btn-change-text");
const p = document.querySelector(".text");

buttonChangeText.addEventListener("click", () => {
  p.textContent = "Texto cambiado";
});

// 2. Añadir elementos: Implementa una función que añada un nuevo < li > con el texto "Elemento X"(donde X es el número de elementos actuales + 1) al hacer clic en el botón con el ID btn - add - item.

const lista = document.querySelector("#item-list");
const buttonAddItem = document.querySelector("#btn-add-item");

buttonAddItem.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = `Elemento ${lista.querySelectorAll("li").length + 1}`
  lista.appendChild(newLi);
})

// Manejo de eventos de formulario: Haz que el formulario con el ID user - form muestre el nombre ingresado en el campo de texto dentro del párrafo con el ID form - output al enviar el formulario.

const form = document.querySelector("#user-form");
const inputName = document.querySelector("#name");
const pSalida = document.querySelector("#form-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = inputName.value;
  pSalida.textContent = text;
  inputName.value = "";
});

// Estilos dinámicos: Cambia el color de fondo del encabezado(<header>) cuando el usuario pase el mouse sobre él. Restaura el color original cuando el mouse salga.

const header = document.querySelector("#header");

header.addEventListener("mouseenter", ()=> {
  header.style.background  = "red";
});

header.addEventListener("mouseleave", () => {
  header.style.background = "#333";
});

// Eliminar elementos: Agrega un botón "Eliminar" junto a cada elemento de la lista(<li>). Al hacer clic en este botón, elimina el elemento correspondiente.

const recorreLista = document.querySelectorAll("#item-list li");
recorreLista.forEach(item => {
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Eliminar";
  item.appendChild(buttonDelete);

  buttonDelete.addEventListener("click", () => {
    item.remove();
  })
});

// Clases dinámicas: Crea una función que alterne la clase highlight en el título principal(#main - title) cuando se haga doble clic sobre él.La clase highlight debe tener un estilo personalizado en tu archivo CSS.

const mainTitle = document.querySelector("#main-title");
mainTitle.addEventListener("dblclick", (event) => {
  mainTitle.classList.toggle("highlight");
});

// Iteración de nodos: Escribe una función que recorra todos los elementos < li > de la lista y muestre su contenido en la consola.
const recorreLista2 = document.querySelectorAll("#item-list li");
recorreLista2.forEach(item => {
  console.log(item.textContent);
})

// Creación dinámica de elementos: Crea un botón que, al ser presionado, genere un nuevo párrafo con el texto "Nuevo párrafo" y lo inserte al final de la sección con el ID section1.


const section1 = document.querySelector("#section1");
const newButton = document.createElement("button");
newButton.textContent = "Click al nuevo button";
section1.appendChild(newButton);

newButton.addEventListener("click", () => {
  const newParrafo = document.createElement("p");
  newParrafo.textContent = "Nuevo Parrafo";
  newParrafo.style.color = "yellow";
  section1.appendChild(newParrafo);
});

// Manipulación de atributos: Cambia el atributo href de los enlaces del menú(<a>) para que apunten a https://ejemplo.com al cargar la página.

const menu = document.querySelectorAll("#menu li a");
menu.forEach(enlace => {
  enlace.href = "https://ejemplo.com";
});

// Eventos delegados: Implementa un sistema de eventos delegados para detectar clics en cualquier elemento de la lista(<li>). Muestra en la consola el texto del elemento clicado.

const myList = document.querySelector("#item-list");
myList.addEventListener("click", (e) => {
  if (e.target.matches("li")){
    console.log(e.target.textContent);
  }
})
