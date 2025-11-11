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

    // 6.1 Funzione Creazione Bottoni
    function creaBottone(text,classe,ariaLabel,titolo) {
        const button = document.createElement("button")
        button.textContent = text
        button.setAttribute("aria-label", ariaLabel)
        button.title = titolo
        if (text === "Elimina") {
            button.classList.add(classe)
        } else {
            button.classList.add(classe,"btnDispositivo")
        }
        return button
    }

    // 6.2 Bottone Più (+)
    const btnPlus = creaBottone("Più (+)","verde","Incrementa il contatore di uno","Incrementa il contatore di uno")    

    // 6.3 Bottone Meno (-)
    const btnMinus = creaBottone("Meno (-)","rosso","Decrementa il contatore di uno","Decrementa il contatore di uno")

    // 6.4 Bottone Reset (0)
    const btnReset = creaBottone("Reset (0)","grigio","Resetta il valore a zero","Resetta il valore a zero")

    // 6.5 Bottone Più 5 (+5)
    const btnPlus5 = creaBottone("+5","verdeScuro","Incrementa il contatore di cinque","Incrementa il contatore di cinque")

    // 6.6 Bottone Salva Valore
    const btnSave = creaBottone("Salva","blu","Salva il valore","Salva il valore")

    // 6.7 Bottone Meno 5 (-5)
    const btnMinus5 = creaBottone("-5","marrone","Decrementa il contatore di cinque","Decrementa il contatore di cinque")


// 7.0 AppendChild Dispositivo
container.appendChild(dispositivo)
dispositivo.append(display,buttonContainer)
buttonContainer.append(btnPlus,btnReset,btnMinus,btnPlus5,btnMinus5,btnSave)

// 8.0 Funzioni Dispositivo
display.textContent = `Numero: 0`
    // 8.1 Aggiorna Display
    function aggiornaDisplay() {
        display.textContent = `Numero: ${i}`
    }

    // 8.2 Aggiorna Valore
    function aggiornaValore(valore) {
        i += valore;
        aggiornaDisplay()
    }

    // 8.3 Resetta Valore
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
    
            // 9.6.1 Funzione Creazione Celle Tabella
            function celleTabella(tag,text,type,placeholder) {
                const element = document.createElement(tag)
                if (tag === "input") {
                    element.type = type
                    element.placeholder = placeholder
                } else {
                    element.textContent = text
                }
                return element
            }
            // 9.6.2 Evento Click Bottone Salva
            btnSave.addEventListener("click", () => {
                if (!savedTable) {
                    savedTable = document.createElement("table")
                    savedTable.classList.add("tabella")
                    
                    // 9.6.2.1 Creazione Elementi Tabella
                    const header = celleTabella("tr")
                    const th1 = celleTabella("th","Valore")
                    const th2 = celleTabella("th","Descrizione")
                    const th3 = celleTabella("th","Elimina Riga")

                    // 9.6.2.2 Append Child Tabella
                    header.append(th1,th2,th3)
                    savedTable.appendChild(header)
                    container.appendChild(savedTable)
                };

                    // 9.6.2.3 Creazione Riga Tabella
                    const row = celleTabella("tr")

                    // 9.6.2.4 Creazione Cella Valore
                    const valueCell = celleTabella("td",i)

                    // 9.6.2.5 Creazione Cella Input
                    const inputCell = celleTabella("td")
                    const input = celleTabella("input","","text","Scrivi Una Descrizione...")
                    const removeCell = celleTabella("td")

                    // 9.6.2.6 Creazione Bottone Elimina Riga
                    const btnRemove = creaBottone("Elimina", "btnRemove", "Elimina questo valore salvato", "Elimina questo valore salvato")
                    btnRemove.addEventListener("click", () => {
                        row.remove();
                        if (savedTable.rows.length === 1) {
                            savedTable.remove()
                            savedTable = null
                        }
                    });

                    // 9.6.2.7 AppendChild Celle alla tabella
                    removeCell.appendChild(btnRemove)
                    inputCell.appendChild(input)
                    row.append(valueCell,inputCell,removeCell)
                    savedTable.appendChild(row)
            });




    