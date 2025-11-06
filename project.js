let container = document.querySelector(".container")

// h1 Titolo
const title = document.createElement("h1")
container.appendChild(title)
title.textContent = "Progetto JS - Counter"

// h2 Display
const display = document.createElement("h2")

// dispositivo
let dispositivo = document.createElement("div")
dispositivo.className = "device"

// Bottoni + e -
const buttonContainer = document.createElement("div")
const btnPlus = document.createElement("button")
btnPlus.textContent = "Più (+)"
btnPlus.className = "verde"

const btnMinus = document.createElement("button")
btnMinus.textContent = "Meno (-)"
btnMinus.className = "rosso"

const btnReset = document.createElement("button")
btnReset.textContent = "Reset (0)"

// Append Child
container.appendChild(dispositivo)
dispositivo.appendChild(display)
dispositivo.appendChild(buttonContainer)
buttonContainer.appendChild(btnPlus)
buttonContainer.appendChild(btnMinus)
buttonContainer.appendChild(btnReset)

// Inizializzazione e funzione
let i = 0;
display.textContent = `Il numero è 0`
function aggiornaDisplay() {
    display.textContent = `Il numero è ${i}`}


// Eventi
btnPlus.addEventListener("click", button => {
    i++;
    aggiornaDisplay()
})
btnMinus.addEventListener("click", button => {
    i--;
    aggiornaDisplay()

})
btnReset.addEventListener("click", button => {
    i = 0;
    aggiornaDisplay()

})

