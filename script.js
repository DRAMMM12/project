// --- Script per il pulsante "Esplora i Nostri Prodotti" ---
// Otteniamo un riferimento al pulsante principale
const exploreProductsButton = document.getElementById('exploreProductsButton');

// Otteniamo un riferimento al paragrafo dinamico nella sezione hero
const dynamicMessageParagraph = document.getElementById('hero').querySelector('p'); // Seleziona il paragrafo all'interno della sezione hero

// Variabile per tenere traccia dello stato del testo
let isOriginalText = true;

// Aggiungiamo un "listener" al pulsante principale
exploreProductsButton.addEventListener('click', function() {
    if (isOriginalText) {
        dynamicMessageParagraph.textContent = 'Scopri come le nostre innovazioni stanno ridefinendo il mercato! Sfoglia la nostra gamma completa di prodotti e soluzioni all\'avanguardia.';
        exploreProductsButton.textContent = 'Torna alla presentazione iniziale';
        // In un sito reale, qui potresti aggiungere uno scroll alla sezione #products
        // document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    } else {
        dynamicMessageParagraph.textContent = 'Siamo leader nello sviluppo di tecnologie all\'avanguardia, creando soluzioni che ridefiniscono gli standard del settore e migliorano la vita di ogni giorno.';
        exploreProductsButton.textContent = 'Esplora i Nostri Prodotti';
    }
    // Invertiamo lo stato per il prossimo click
    isOriginalText = !isOriginalText;
});


// --- Script OPZIONALE per la barra di ricerca ---
// Questa parte è solo un esempio di come potresti iniziare
// a gestire la ricerca se avessi del contenuto da filtrare
// o un backend per la ricerca.

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-bar button[type="submit"]');

// Esempio: ascolta il click sul pulsante di ricerca
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim(); // .trim() rimuove spazi bianchi iniziali/finali
    if (searchTerm !== '') {
        alert('Innovatech Solutions - Hai cercato: "' + searchTerm + '".\nIn un sito reale, qui verrebbero mostrati i risultati della ricerca!');
        // Qui dovresti implementare la logica di ricerca vera e propria:
        // 1. Filtrare elementi nella pagina (es. schede prodotto)
        // 2. Inviare una richiesta a un backend per i risultati di ricerca
        // 3. Reindirizzare a una pagina dei risultati di ricerca (es. search.html?q=termine)
    } else {
        alert('Per favore, inserisci un termine di ricerca per Innovatech Solutions.');
    }
});

// Esempio: ascolta il tasto Invio nell'input di ricerca
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impedisce il submit di un form se l'input fosse in un <form>
        searchButton.click(); // Simula un click sul pulsante di ricerca
    }
});


// --- Script per lo Smooth Scrolling (se hai la navigazione con link interni) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
