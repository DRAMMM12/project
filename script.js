// Otteniamo un riferimento al pulsante interattivo
const toggleButton = document.getElementById('toggleButton');

// Otteniamo un riferimento al paragrafo dinamico
const dynamicMessageParagraph = document.getElementById('dynamicMessage');

// Variabile per tenere traccia dello stato del testo
let isOriginalText = true;

// Aggiungiamo un "listener" al pulsante principale
toggleButton.addEventListener('click', function() {
    if (isOriginalText) {
        dynamicMessageParagraph.textContent = 'Hai attivato l\'interazione! Il contenuto è stato modificato dinamicamente.';
        toggleButton.textContent = 'Ripristina il testo originale';
    } else {
        dynamicMessageParagraph.textContent = 'Questo esempio illustra in modo conciso come HTML, CSS e JavaScript si combinano per creare esperienze web interattive.';
        toggleButton.textContent = 'Attiva Interazione';
    }
    // Invertiamo lo stato per il prossimo click
    isOriginalText = !isOriginalText;
});

// --- Inizio Aggiunta JavaScript per la barra di ricerca (OPZIONALE) ---
// Questa parte è solo un esempio di come potresti iniziare
// a gestire la ricerca se avessi del contenuto da filtrare.
// Non farà nulla in questo esempio senza più contenuto o logica.

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-bar button[type="submit"]');

// Esempio: ascolta il click sul pulsante di ricerca
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() !== '') {
        alert('Hai cercato: ' + searchTerm); // Solo un alert per dimostrazione
        // Qui dovresti implementare la logica di ricerca vera e propria,
        // ad esempio filtrando elementi nella pagina o reindirizzando.
    } else {
        alert('Per favore, inserisci un termine di ricerca.');
    }
});

// Esempio: ascolta il tasto Invio nell'input di ricerca
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchButton.click(); // Simula un click sul pulsante di ricerca
    }
});
// --- Fine Aggiunta JavaScript per la barra di ricerca (OPZIONALE) ---