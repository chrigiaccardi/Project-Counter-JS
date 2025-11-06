let container = document.querySelector(".container")

// h1 Titolo
const title = document.createElement("h1")
container.appendChild(title)
title.textContent = "Progetto JS - Counter"

// h2 Display
const display = document.createElement("h2")

// Bottoni + e -
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
container.appendChild(btnPlus)
container.appendChild(btnMinus)
container.appendChild(btnReset)

// Inizializzazione e funzione
let i = 0;
display.textContent = `Il numero è ${i}`
function aggiornaDisplay() { display.textContent = `Il numero è ${i}` }
if (i < 0) {
    i.className = "scrittaRossa"
} else {
    i.className = "scrittaVerde"
}

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

