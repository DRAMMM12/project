/* --- Reset di Base e Font --- */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; /* Font per il corpo del testo */
    background-color: #f8f9fa; /* Colore di sfondo leggero */
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth; /* Per uno scorrimento fluido alle ancore */
}

/* --- Classe per Screen Reader Only (Accessibilità) --- */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

/* --- Header e Contenuto Header --- */
header {
    background-color: #0056b3; /* Blu scuro per l'header */
    color: white;
    padding: 15px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Ombra leggera per profondità */
    display: flex;
    flex-direction: column; /* Impila elementi verticalmente */
    align-items: center;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px; /* Larghezza massima del contenuto */
    padding: 0 20px;
    box-sizing: border-box;
    flex-wrap: wrap; /* Permette agli elementi di andare a capo su schermi piccoli */
}

.logo-link {
    text-decoration: none;
    color: inherit; /* Mantiene il colore del testo ereditato dall'header */
}

header h1 {
    font-family: 'Montserrat', sans-serif; /* Font più audace per il titolo */
    margin: 0;
    font-size: 2em;
    flex-shrink: 0;
    margin-right: 20px; /* Spazio a destra del titolo */
}

/* --- Navigazione Principale --- */
.main-nav {
    width: 100%;
    max-width: 1200px;
    margin-top: 10px; /* Spazio tra header-content e nav */
    text-align: center;
}

.main-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* Flexbox per i link */
    justify-content: center; /* Centra i link */
    flex-wrap: wrap; /* Permette ai link di andare a capo */
}

.main-nav li {
    margin: 0 15px;
}

.main-nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 5px 0;
    transition: color 0.3s ease;
}

.main-nav a:hover {
    color: #a0d8ff; /* Colore più chiaro al passaggio del mouse */
}

/* --- Stili Barra di Ricerca --- */
.search-bar {
    display: flex;
    gap: 10px;
    align-items: center;
    max-width: 400px;
    width: 100%;
    flex-grow: 1;
    margin-top: 10px; /* Spazio se va a capo */
}

.search-bar input[type="text"] {
    flex-grow: 1;
    padding: 10px 15px;
    border: 1px solid #003d80;
    border-radius: 25px;
    font-size: 0.9em;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-bar input[type="text"]:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.search-bar button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease, transform 0.1s ease;
    white-space: nowrap;
}

.search-bar button[type="submit"]:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
}

/* --- Main Content Layout --- */
main {
    max-width: 1200px;
    margin: 40px auto; /* Centra il contenuto principale */
    padding: 0 20px;
    box-sizing: border-box;
}

section {
    background-color: white;
    padding: 40px;
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: left; /* Il testo delle sezioni è allineato a sinistra */
}

section h2 {
    font-family: 'Montserrat', sans-serif;
    color: #0056b3;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center; /* Titoli delle sezioni centrati */
}

section p, section ul {
    font-size: 1.1em;
    margin-bottom: 15px;
}

section ul {
    list-style: disc;
    margin-left: 20px;
}

/* --- Sezione Hero (Banner Iniziale) --- */
#hero {
    text-align: center;
    background-color: #e9ecef; /* Sfondo leggermente diverso */
    padding: 60px 40px;
}

#hero h2 {
    font-size: 2.5em;
    color: #004085;
    margin-bottom: 25px;
}

#hero p {
    max-width: 800px;
    margin: 0 auto 30px auto;
    font-size: 1.2em;
}

/* --- Product Grid --- */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Colonne adattive */
    gap: 30px; /* Spazio tra le schede */
    margin-top: 30px;
    margin-bottom: 30px;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px); /* Effetto al passaggio del mouse */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
}

.product-card h3 {
    font-family: 'Montserrat', sans-serif;
    color: #0056b3;
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 15px;
}

.product-card p {
    font-size: 0.95em;
    color: #555;
    min-height: 50px; /* Per mantenere l'altezza uniforme */
}

/* --- Stili Pulsanti --- */
.btn-primary, .btn-secondary {
    display: inline-block;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    text-decoration: none; /* Per i link che sembrano pulsanti */
    transition: background-color 0.3s ease, transform 0.1s ease;
    margin: 5px; /* Spazio tra pulsanti */
}

.btn-primary {
    background-color: #007bff; /* Blu principale */
    color: white;
}

.btn-primary:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: #6c757d; /* Grigio secondario */
    color: white;
}

.btn-secondary:hover {
    background-color: #5a6268;
    transform: translateY(-1px);
}

/* Il pulsante nel div di esempio dell'HTML precedente, rinominato */
button#exploreProductsButton {
    background-color: #28a745; /* Verde accattivante */
}

button#exploreProductsButton:hover {
    background-color: #218838;
}

/* --- Footer --- */
footer {
    background-color: #333;
    color: white;
    padding: 20px;
    margin-top: 40px;
    font-size: 0.9em;
    text-align: center;
}

footer a {
    color: #a0d8ff;
    text-decoration: none;
    margin: 0 10px;
}

footer a:hover {
    text-decoration: underline;
}

/* --- Media Queries per la Responsività --- */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        align-items: flex-start; /* Allinea a sinistra su schermi piccoli */
    }

    header h1 {
        font-size: 1.5em;
        margin-right: 0;
        margin-bottom: 10px;
    }

    .search-bar {
        margin-top: 10px;
        width: 100%; /* Occupa tutta la larghezza */
        max-width: none; /* Rimuove max-width */
    }
    
    .main-nav ul {
        flex-direction: column; /* Links impilati */
        margin-top: 15px;
    }

    .main-nav li {
        margin: 5px 0;
    }

    section {
        padding: 25px;
    }

    section h2 {
        font-size: 1.8em;
    }

    #hero h2 {
        font-size: 2em;
    }
    #hero p {
        font-size: 1em;
    }
    
    .product-grid {
        grid-template-columns: 1fr; /* Una colonna su schermi piccoli */
    }
}

@media (max-width: 480px) {
    .header-content, main {
        padding: 0 15px;
    }

    .search-bar input, .search-bar button {
        font-size: 0.85em;
        padding: 8px 15px;
    }

    .btn-primary, .btn-secondary, button#exploreProductsButton {
        padding: 10px 20px;
        font-size: 0.9em;
    }
}
