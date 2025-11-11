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

    // 6.1 Funzione Bottoni
    function creaBottone(text,classe,ariaLabel,titolo) {
        const button = document.createElement("button")
        button.textContent = text
        button.classList.add(classe, "btnDispositivo")
        button.setAttribute("aria-label", ariaLabel)
        button.title = titolo
        return button
    }


    // 6.1 Bottone Più (+)
    const btnPlus = creaBottone("Più (+)","verde","Incrementa il contatore di uno","Incrementa il contatore di uno")    

    // 6.2 Bottone Meno (-)
    const btnMinus = creaBottone("Meno (-)","rosso","Decrementa il contatore di uno","Decrementa il contatore di uno")

    // 6.3 Bottone Reset (0)
    const btnReset = creaBottone("Reset (0)","grigio","Resetta il valore a zero","Resetta il valore a zero")

    // 6.4 Bottone Più 5 (+5)
    const btnPlus5 = creaBottone("+5","verdeScuro","Incrementa il contatore di cinque","Incrementa il contatore di cinque")

    // 6.5 Bottone Salva Valore
    const btnSave = creaBottone("Salva","blu","Salva il valore","Salva il valore")

    // 6.6 Bottone Meno 5 (-5)
    const btnMinus5 = creaBottone("-5","marrone","Decrementa il contatore di cinque","Decrementa il contatore di cinque")


// 7.0 AppendChild Dispositivo
container.appendChild(dispositivo)
dispositivo.append(display,buttonContainer)
buttonContainer.append(btnPlus,btnReset,btnMinus,btnPlus5,btnMinus5,btnSave)

// 8.0 Funzioni
display.textContent = `Numero: 0`
function aggiornaDisplay() {
    display.textContent = `Numero: ${i}`
}
function aggiornaValore(valore) {
    i += valore;
    aggiornaDisplay()
}
function resettaValore() {
    i = 0;
    aggiornaDisplay()
}


// 9.0 Eventi

    // 9.1 Click Bottone Più
    btnPlus.addEventListener("click", button => { aggiornaValore(1)})

    // 9.2 Click Bottone Meno
    btnMinus.addEventListener("click", button => { aggiornaValore(-1)})

    // 9.3 Click Bottone Reset
    btnReset.addEventListener("click", button => {resettaValore()})

    // 9.4 Click Bottone Più 5
    btnPlus5.addEventListener("click", button => { aggiornaValore(5)})

    // 9.5 Click Bottone Meno 5
    btnMinus5.addEventListener("click", button => { aggiornaValore(-5)})

    // 9.6 Click Bottone Salva - Creazione Tabella
    btnSave.addEventListener("click", () => {
        if (!savedTable) {
            savedTable = document.createElement("table")
            savedTable.classList.add("tabella")

            // Funzioni Creazione Tabella

            // 9.6.1 Creazione Elementi Tabella
            const header = document.createElement("tr")
            const th1 = document.createElement("th")
            th1.textContent = "Valore"
            const th2 = document.createElement("th")
            th2.textContent = "Descrizione"
            const th3 = document.createElement("th")
            th3.textContent = ""

            // 9.6.2 Append Child Tabella
            header.append(th1,th2,th3)
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
            const btnRemove = creaBottone("Elimina", "btnRemove", "Elimina questo valore salvato", "Elimina questo valore salvato")
            btnRemove.classList.remove("btnDispositivo")
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
            row.append(valueCell,inputCell,removeCell)
            savedTable.appendChild(row)
    });




 