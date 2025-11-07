let container = document.querySelector(".container")

// Inizializzazione
let i = 0
let savedTable = null

// h1 Titolo
const title = document.createElement("h1")
container.appendChild(title)
title.textContent = "Progetto JS - Counter"

// h2 Display
const display = document.createElement("h2")

// dispositivo
let dispositivo = document.createElement("div")
dispositivo.classList.add("device")

// Bottoni
const buttonContainer = document.createElement("div")

const btnPlus = document.createElement("button")
btnPlus.textContent = "Più (+)"
btnPlus.classList.add("verde", "btnDispositivo")

const btnMinus = document.createElement("button")
btnMinus.textContent = "Meno (-)"
btnMinus.classList.add("rosso", "btnDispositivo")

const btnReset = document.createElement("button")
btnReset.textContent = "Reset (0)"
btnReset.classList.add("grigio","btnDispositivo")

const btnPlus5 = document.createElement("button")
btnPlus5.textContent = "+5"
btnPlus5.classList.add("verdeScuro", "btnDispositivo")

const btnSave = document.createElement("button")
btnSave.textContent = "Salva"
btnSave.classList.add("blu", "btnDispositivo")

const btnMinus5 = document.createElement("button")
btnMinus5.textContent = "-5"
btnMinus5.classList.add("marrone", "btnDispositivo")

// AppendChild Dispositivo
container.appendChild(dispositivo)
dispositivo.appendChild(display)
dispositivo.appendChild(buttonContainer)
buttonContainer.appendChild(btnPlus)
buttonContainer.appendChild(btnReset)
buttonContainer.appendChild(btnMinus)
buttonContainer.appendChild(btnPlus5)
buttonContainer.appendChild(btnMinus5)
buttonContainer.appendChild(btnSave)



// Funzione
display.textContent = `Numero: 0`
function aggiornaDisplay() {
    display.textContent = `Numero: ${i}`}


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

btnPlus5.addEventListener("click", button => {
    i += 5;
    aggiornaDisplay()

})

btnMinus5.addEventListener("click", button => {
    i -= 5;
    aggiornaDisplay()

})

btnSave.addEventListener("click", () => {
    if (!savedTable) {
        savedTable = document.createElement("table")
        savedTable.classList.add("tabella")

        const header = document.createElement("tr")
        const th1 = document.createElement("th")
        th1.textContent = "Valore"
        const th2 = document.createElement("th")
        th2.textContent = "Descrizione"
        const th3 = document.createElement("th")
        th3.textContent = ""
        header.appendChild(th1)
        header.appendChild(th2)
        header.appendChild(th3)
        savedTable.appendChild(header)

        container.appendChild(savedTable)
        
    };
    // Tabella Saved
    const row = document.createElement("tr")

    const valueCell = document.createElement("td")
    valueCell.textContent = i

    const inputCell = document.createElement("td")
    const input = document.createElement("input")
    input.type = "text"
    input.placeholder = "Scrivi Descrizione..."
    const removeCell = document.createElement("td")

    const btnRemove = document.createElement("button")
    btnRemove.textContent = "Elimina"
    btnRemove.classList.add("btnRemove")
    btnRemove.addEventListener("click", () => {
        row.remove();
        if (savedTable.rows.length === 1) {
            savedTable.remove()
            savedTable = null
        }
    });

    // AppendChild Tabella
    removeCell.appendChild(btnRemove)
    inputCell.appendChild(input)
    row.appendChild(valueCell)
    row.appendChild(inputCell)
    row.appendChild(removeCell)
    savedTable.appendChild(row)
});



