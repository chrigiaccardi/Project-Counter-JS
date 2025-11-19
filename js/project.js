// 1.0 Container Principale
let container = document.querySelector(".container");

// 2.0 Inizializzazione
let i = 0;
let savedTable = null;

// 3.0 Funzioni Generiche
function creaElemento(tag, options = {}) {
    const element = document.createElement(tag)
    if (options.padre) {options.padre.appendChild(element)}
    if (options.text) {element.textContent = options.text}
    if (options.classes) {element.classList.add(...options.classes)}
    if (options.attributes) {
        for (const [chiave, valore] of Object.entries(options.attributes)) {
            element.setAttribute(chiave,valore)
        }
    }
    if (options.events) {
        for (const [event, handler] of Object.entries(options.events)) {
            element.addEventListener(event,handler)
        }
    }    
    return element
};

function creaBottone(tag, contenuto, classes, ariaLabel, titolo, evento, padreElemento) {
    return creaElemento(tag, {
        text: contenuto,
        classes: classes,
        attributes: {
            "aria-label": ariaLabel,
            "title": titolo
        }, events: {
            "click": evento
        }, padre: padreElemento,
    });
};

function creaCella(tag, contenuto, tipo, placeholder, padreElemento) {
    return creaElemento(tag, {
        text: contenuto,
        attributes: {
            "type": tipo,
            "placeholder": placeholder
        }, padre: padreElemento,
        
    })
}

function bottoneSalva() {
    if (!savedTable) {
        savedTable = creaElemento("table", { classes: ["tabella"], padre: container })
        const header = creaCella("tr", {padre: savedTable})
        const th1 = creaCella("th", "Valore",{padre: header})
        const th2 = creaCella("th", "Descrizione",{padre: header})
        const th3 = creaCella("th", "Elimina Riga",{padre: header})
    }
    const row = creaCella("tr","",savedTable });
    const valueCell = creaCella("td", i,"", row);
    const inputCell = creaCella("td","","",row);
    const input = creaCella("input","","text", "Scrivi Una Descrizione...",inputCell)

}

// 8.0 Funzioni Dispositivo
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

// 4.0 h1 Titolo
const title = creaElemento("h1", {text: "Progetto JS - Counter", padre: container});

// 6.0 dispositivo
let dispositivo = creaElemento("div", { classes: ["device"], padre: container });

// 5.0 h2 Display
const display = creaElemento("h2", { padre: dispositivo });
display.textContent = `Numero: 0`

// 7.0 Bottoni
const buttonContainer = creaElemento("div", { padre: dispositivo });

const btnPlus = creaBottone("button",
    "Più (+)", ["verde", "btnDispositivo"],
    "Incrementa il contatore di uno",
    "Incrementa il contatore di uno",
    () => aggiornaValore(1),
    buttonContainer,
);    
const btnMinus = creaBottone(
    "button",
    "Meno (-)",
    ["rosso", "btnDispositivo"],
    "Decrementa il contatore di uno",
    "Decrementa il contatore di uno",
    () => aggiornaValore(-1),
    buttonContainer
);

const btnReset = creaBottone(
    "button",
    "Reset (0)",
    ["grigio", "btnDispositivo"],
    "Resetta il valore a zero",
    "Resetta il valore a zero",
    () => resettaValore(),
    buttonContainer
);

const btnPlus5 = creaBottone(
    "button",
    "+5",
    ["verdeScuro", "btnDispositivo"],
    "Incrementa il contatore di cinque",
    "Incrementa il contatore di cinque",
    () => aggiornaValore(5),
    buttonContainer
);
const btnSave = creaBottone(
    "button",
    "Salva",
    ["blu", "btnDispositivo"],
    "Salva il valore",
    "Salva il valore",
    () => bottoneSalva(),
    buttonContainer
);

const btnMinus5 = creaBottone(
    "button",
    "-5",
    ["marrone", "btnDispositivo"],
    "Decrementa il contatore di cinque",
    "Decrementa il contatore di cinque",
    () => aggiornaValore(-5),
    buttonContainer
);


    //                 // 9.6.2.3 Creazione Riga Tabella
    //                 const row = celleTabella("tr")

    //                 // 9.6.2.4 Creazione Cella Valore
    //                 const valueCell = celleTabella("td",i)

    //                 // 9.6.2.5 Creazione Cella Input
    //                 const inputCell = celleTabella("td")
    //                 const input = celleTabella("input","","text","Scrivi Una Descrizione...")
    //                 const removeCell = celleTabella("td")

    //                 // 9.6.2.6 Creazione Bottone Elimina Riga
    //                 const btnRemove = creaBottone("Elimina", "btnRemove", "Elimina questo valore salvato", "Elimina questo valore salvato")
    //                 btnRemove.addEventListener("click", () => {
    //                     row.remove();
    //                     if (savedTable.rows.length === 1) {
    //                         savedTable.remove()
    //                         savedTable = null
    //                     }
    //                 });

    //                 // 9.6.2.7 AppendChild Celle alla tabella
    //                 removeCell.appendChild(btnRemove)
    //                 inputCell.appendChild(input)
    //                 row.append(valueCell,inputCell,removeCell)
    //                 savedTable.appendChild(row)
    //         });
