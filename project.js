let container = document.querySelector(".container")

// h1 Titolo
const title = document.createElement("h1")
container.appendChild(title)
title.textContent = "Progetto JS - Counter"

// h2 Display
const display = document.createElement("h2")
const numberDisplay = document.createElement("span")

// Bottoni + e -
const buttonContainer = document.createElement("div")
const btnPlus = document.createElement("button")
btnPlus.textContent = "Più (+)"
btnPlus.className = "verde"

const btnMinus = document.createElement("button")
btnMinus.textContent = "Meno (-)"
btnMinus.className = "rosso"

const btnReset = document.createElement("button")
btnReset.textContent = "Reset"

// Append Child
container.appendChild(display)
container.appendChild(buttonContainer)
display.appendChild(numberDisplay)
buttonContainer.appendChild(btnPlus)
buttonContainer.appendChild(btnMinus)
buttonContainer.appendChild(btnReset)

// Inizializzazione e funzione
let i = 0;
display.textContent = `Il numero è ${i}`
function aggiornaDisplay() {
    display.textContent = i;
    numberDisplay.classList.remove("scrittaRossa", "scrittaVerde")
    if (i < 0) {
    numberDisplay.classList.add = "scrittaRossa"
} else if (i > 0) {
    numberDisplay.classList.add = "scrittaVerde"
}}


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

