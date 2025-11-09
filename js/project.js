// 1.0 Container Principale
let container = document.querySelector(".container")

// 2.0 Inizializzazione
let i = 0
let savedTable = null

// 3.0 h1 Titolo
const title = document.createElement("h1")
container.appendChild(title)
title.textContent = "Progetto JS - Counter"

// 4.0 h2 Display
const display = document.createElement("h2")

// 5.0 dispositivo
let dispositivo = document.createElement("div")
dispositivo.classList.add("device")

// 6.0 Bottoni
const buttonContainer = document.createElement("div")

    // 6.1 Bottone Più (+)
    const btnPlus = document.createElement("button")
    btnPlus.textContent = "Più (+)"
    btnPlus.classList.add("verde", "btnDispositivo")
    btnPlus.setAttribute("aria-label", "Incrementa il contatore di uno")
    btnPlus.title = "Incrementa il contatore di uno"

    // 6.2 Bottone Meno (-)
    const btnMinus = document.createElement("button")
    btnMinus.textContent = "Meno (-)"
    btnMinus.classList.add("rosso", "btnDispositivo")
    btnMinus.setAttribute("aria-label", "Decrementa il contatore di uno")
    btnMinus.title = "Decrementa il contatore di uno"

    // 6.3 Bottone Reset (0)
    const btnReset = document.createElement("button")
    btnReset.textContent = "Reset (0)"
    btnReset.classList.add("grigio", "btnDispositivo")
    btnReset.setAttribute("aria-label", "Resetta il valore a zero")
    btnReset.title = "Resetta il valore a zero"

    // 6.4 Bottone Più 5 (+5)
    const btnPlus5 = document.createElement("button")
    btnPlus5.textContent = "+5"
    btnPlus5.classList.add("verdeScuro", "btnDispositivo")
    btnPlus5.setAttribute("aria-label", "Incrementa il contatore di cinque")
    btnPlus5.title = "Incrementa il contatore di cinque"

    // 6.5 Bottone Salva Valore
    const btnSave = document.createElement("button")
    btnSave.textContent = "Salva"
    btnSave.classList.add("blu", "btnDispositivo")
    btnSave.setAttribute("aria-label", "Salva il valore")
    btnSave.title = "Salva il valore"

    // 6.6 Bottone Meno 5 (-5)
    const btnMinus5 = document.createElement("button")
    btnMinus5.textContent = "-5"
    btnMinus5.classList.add("marrone", "btnDispositivo")
    btnMinus5.setAttribute("aria-label", "Decrementa il contatore di cinque")
    btnMinus5.title = "Decrementa il contatore di cinque"


// 7.0 AppendChild Dispositivo
container.appendChild(dispositivo)

dispositivo.appendChild(display)
dispositivo.appendChild(buttonContainer)

buttonContainer.appendChild(btnPlus)
buttonContainer.appendChild(btnReset)
buttonContainer.appendChild(btnMinus)
buttonContainer.appendChild(btnPlus5)
buttonContainer.appendChild(btnMinus5)
buttonContainer.appendChild(btnSave)



// 8.0 Funzione
display.textContent = `Numero: 0`
function aggiornaDisplay() {
    display.textContent = `Numero: ${i}`
}



// 9.0 Eventi

    // 9.1 Click Bottone Più
    btnPlus.addEventListener("click", button => {
        i++;
        aggiornaDisplay()
    })

    // 9.2 Click Bottone Meno
    btnMinus.addEventListener("click", button => {
        i--;
        aggiornaDisplay()

    })

    // 9.3 Click Bottone Reset
    btnReset.addEventListener("click", button => {
        i = 0;
        aggiornaDisplay()

    })

    // 9.4 Click Bottone Più 5

    btnPlus5.addEventListener("click", button => {
        i += 5;
        aggiornaDisplay()

    })

    // 9.5 Click Bottone Meno 5
    btnMinus5.addEventListener("click", button => {
        i -= 5;
        aggiornaDisplay()

    })

    // 9.6 Click Bottone Salva - Creazione Tabella
    btnSave.addEventListener("click", () => {
        if (!savedTable) {
            savedTable = document.createElement("table")
            savedTable.classList.add("tabella")

            // 9.6.1 Creazione Elementi Tabella
            const header = document.createElement("tr")
            const th1 = document.createElement("th")
            th1.textContent = "Valore"
            const th2 = document.createElement("th")
            th2.textContent = "Descrizione"
            const th3 = document.createElement("th")
            th3.textContent = ""

            // 9.6.2 Append Child Tabella
            header.appendChild(th1)
            header.appendChild(th2)
            header.appendChild(th3)
            savedTable.appendChild(header)

            container.appendChild(savedTable)
            
        };

            // 9.6.3 Creazione Riga Tabella
            const row = document.createElement("tr")

            // 9.6.4 Creazione Cella Valore
            const valueCell = document.createElement("td")
            valueCell.textContent = i

            // 9.6.5 Creazione Cella Input
            const inputCell = document.createElement("td")
            const input = document.createElement("input")
            input.type = "text"
            input.placeholder = "Scrivi Descrizione..."
            const removeCell = document.createElement("td")

            // 9.6.6 Creazione Bottone Elimina Riga
            const btnRemove = document.createElement("button")
            btnRemove.textContent = "Elimina"
            btnRemove.classList.add("btnRemove")
            btnRemove.setAttribute("aria-label", "Elimina questo valore salvato")
            btnRemove.title = "Elimina questo valore salvato"
            btnRemove.addEventListener("click", () => {
                row.remove();
                if (savedTable.rows.length === 1) {
                    savedTable.remove()
                    savedTable = null
                }
            });

            // 9.6.7 AppendChild Elementi alla tabella
            removeCell.appendChild(btnRemove)
            inputCell.appendChild(input)
            row.appendChild(valueCell)
            row.appendChild(inputCell)
            row.appendChild(removeCell)
            savedTable.appendChild(row)
    });



