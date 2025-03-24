const rangeRed = document.querySelector("#red");
const rangeGreen = document.querySelector("#green");
const rangeBlue = document.querySelector("#blue");

document.body.style.backgroundColor = "rgb(150, 200, 35)";

let currentRed = rangeRed.value;
let currentGreen = rangeGreen.value;
let currentBlue = rangeBlue.value;

function actulizarColor(red, green, blue){
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB;
}

rangeRed.addEventListener("change", (e) => {
    currentRed = e.target.value;
    const valueRed = document.querySelector("#value-red");
    valueRed.textContent = currentRed;
    actulizarColor(currentRed, currentGreen, currentBlue);
});

rangeGreen.addEventListener("change", (e) => {
    currentGreen= e.target.value;
    const valueGreen = document.querySelector("#value-green");
    valueGreen.textContent = currentGreen;
    actulizarColor(currentRed, currentGreen, currentBlue);
});

rangeBlue.addEventListener("change", (e) => {
    const currentBlue = e.target.value;
    const valueBlue = document.querySelector("#value-blue");
    valueBlue.textContent = currentBlue;
    actulizarColor(currentRed, currentGreen, currentBlue);
});







