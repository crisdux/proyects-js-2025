function randomColor(){
    const digitos = "0123456789abcdef";
    let randomHex = "#"
    for (let i =0; i<6; i++){
        const randomNumber = Math.floor(Math.random() * 16).toString();
        randomHex += digitos[randomNumber]
    }
    return randomHex
}

console.log(randomColor())

const color = document.querySelector("#color");
const button = document.querySelector("#button-change-color");
const containerColor = document.querySelector("#container-color");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    color.textContent = randomColor();
})