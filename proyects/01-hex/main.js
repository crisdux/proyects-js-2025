const button = document.querySelector("#button-color");
const color = document.querySelector("#color");

function generarColorRandom(){
    let digitos = "0123456789abcdef";
    let colorHex = "#";
    for(let i = 0; i<6; i++){
        let indiceAleatorio = Math.floor(Math.random()*16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

button.addEventListener("click",() => {
    let colorRandom = generarColorRandom();
    color.textContent = colorRandom;
    document.body.style.backgroundColor = colorRandom;
});