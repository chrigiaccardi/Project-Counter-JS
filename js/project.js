// 1.0 Container Principale
let container = document.querySelector(".container");

// 2.0 Inizializzazione
let i = 0;
let tabellaSalva = null;

// 3.0 Funzioni Generiche
    // 3.1 Funzione Crea Elemento
    function creaElemento(tag, options = {}) {
        const element = document.createElement(tag)
        if (options.padre) {options.padre.appendChild(element)}
        if (options.text) {element.textContent = options.text}
        if (options.classi) {element.classList.add(...options.classi)}
        if (options.attributi) {
            for (const [chiave, valore] of Object.entries(options.attributi)) {
                element.setAttribute(chiave,valore)
            }
        }
        if (options.eventi) {
            for (const [event, handler] of Object.entries(options.eventi)) {
                element.addEventListener(event,handler)
            }
        }    
        return element
    };

    // 3.2 Funzione Crea Bottone
    function creaBottone(tag, contenuto, classi, ariaLabel, titolo, evento, padreElemento) {
        let padreCella;
        if (contenuto === "Elimina") {
            padreCella = padreElemento;
            } else {
            padreCella = containerBtn;
        };
        return creaElemento(tag, {
            text: contenuto,
            classi: classi,
            attributi: {
                "aria-label": ariaLabel,
                "title": titolo
            }, eventi: {
                "click": evento
            }, padre: padreCella,
        });
    };

    // 3.3 Funzione Crea Cella Tabella
    function creaCella(tag, contenuto, padreElemento) {
        return creaElemento(tag, {
            text: contenuto,
            padre: padreElemento,
        })
    }

    // 3.4 Funzione Crea Input
    function creaInput(tag, contenuto, tipo, placeholder, padreElemento) {
        return creaElemento(tag, {
            text: contenuto,
            attributi: {
                "type": tipo,
                "placeholder": placeholder
            }, padre: padreElemento,
            
        })
    }

    // 3.5 Funzione Bottone Salva
        function bottoneSalva() {
            
            // 3.5.1 Creazione Tabella
            if (!tabellaSalva) {
                tabellaSalva = creaElemento("table", { classi: ["tabella"], padre: container })
                const header = creaCella("tr", "", tabellaSalva)
                const th1 = creaCella("th", "Valore", header)
                const th2 = creaCella("th", "Descrizione", header)
                const th3 = creaCella("th", "Elimina Riga", header)
            }
            // 3.5.2 Creazione Righe Tabella    
            const riga = creaCella("tr", "", tabellaSalva);
            
            // 3.5.3 Creazione Celle Tabella
            const cellaValore = creaCella("td", i, riga);
            const cellaInput = creaCella("td", "", riga);
            const cellaElimina = creaCella("td", "", riga);

            // 3.5.4 Creazione Input
            const input = creaInput("input", "", "text", "Scrivi Una Descrizione...", cellaInput)
            
            // 3.5.5 Funzione Elimina Riga
            function eliminaRiga() {
                    riga.remove();
                    if (tabellaSalva.rows.length === 1) {
                        tabellaSalva.remove()
                        tabellaSalva = null
                        }
                };

            // 3.5.6 Creazione Bottone Elimina Riga
            const btnElimina = creaBottone(
                "button",
                "Elimina",
                ["btnElimina"],
                "Elimina questo valore salvato",
                "Elimina questo valore salvato",
                () => eliminaRiga(),
                cellaElimina,
            );
        };

// 4.0 Funzioni Dispositivo
    // 4.1 Aggiorna Display
    function aggiornaDisplay() {
        display.textContent = `Numero: ${i}`
    };

    // 4.2 Aggiorna Valore
    function aggiornaValore(valore) {
        i += valore;
        aggiornaDisplay()
    };

    // 4.3 Resetta Valore
    function resettaValore() {
        i = 0;
        aggiornaDisplay()
    };

// 5.0 h1 Titolo
const titolo = creaElemento("h1", {text: "Progetto JS - Counter", padre: container});

// 6.0 dispositivo
let dispositivo = creaElemento("div", { classi: ["dispositivo"], padre: container });

// 7.0 h2 Display
const display = creaElemento("h2", { padre: dispositivo });
display.textContent = `Numero: 0`

// 8.0 Bottoni

    // 8.1 Creazione Container Bottoni
    const containerBtn = creaElemento("div", { padre: dispositivo });
    
    // 8.2 Creazione Bottone Più
    const btnPiu = creaBottone("button",
        "Più (+)", ["verde", "btnDispositivo"],
        "Incrementa il contatore di uno",
        "Incrementa il contatore di uno",
        () => aggiornaValore(1)
    );    
    // 8.3 Creazione Bottone Meno
    const btnMeno = creaBottone("button",
        "Meno (-)", ["rosso", "btnDispositivo"],
        "Decrementa il contatore di uno",
        "Decrementa il contatore di uno",
        () => aggiornaValore(-1)
    );
    // 8.4 Creazione Bottone Reset
    const btnReset = creaBottone("button",
        "Reset (0)", ["grigio", "btnDispositivo"],
        "Resetta il valore a zero",
        "Resetta il valore a zero",
        () => resettaValore()
    );
    // 8.5 Creazione Bottone Piu 5
    const btnPiu5 = creaBottone("button",
        "+5", ["verdeScuro", "btnDispositivo"],
        "Incrementa il contatore di cinque",
        "Incrementa il contatore di cinque",
        () => aggiornaValore(5)
    );

    // 8.6 Creazione Bottone Salva
    const btnSalva = creaBottone("button",
        "Salva", ["blu", "btnDispositivo"],
        "Salva il valore",
        "Salva il valore",
        () => bottoneSalva()
    );
    // 8.7 Creazione Bottone Meno 5
    const btnMeno5 = creaBottone("button",
        "-5", ["marrone", "btnDispositivo"],
        "Decrementa il contatore di cinque",
        "Decrementa il contatore di cinque",
        () => aggiornaValore(-5)
    );
