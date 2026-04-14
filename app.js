const app = document.getElementById("app");

// Simulazione microservizi (ogni pagina è indipendente)
const routes = {
    home: () => `
        <div class="card">
            <h2>Home</h2>
            <p>Benvenuto nel nostro sito a microservizi!</p>
        </div>
    `,

    "chi-siamo": () => `
        <div class="card">
            <h2>Chi siamo</h2>
            <p>Siamo un team di sviluppatori appassionati.</p>
        </div>
    `,

    "cosa-facciamo": () => `
        <div class="card">
            <h2>Cosa facciamo</h2>
            <p>Realizziamo soluzioni web moderne e scalabili.</p>
        </div>
    `,

    contatti: () => `
        <div class="card">
            <h2>Contatti</h2>
            <form id="contactForm">
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Messaggio" required></textarea>
                <button type="submit">Invia</button>
            </form>
            <p id="response"></p>
        </div>
    `
};

// Router
function router() {
    const hash = location.hash.replace("#", "") || "home";
    const page = routes[hash];
    app.innerHTML = page ? page() : "<h2>Pagina non trovata</h2>";

    if (hash === "contatti") {
        const form = document.getElementById("contactForm");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            document.getElementById("response").innerText =
                "Messaggio inviato (simulazione microservizio)";
        });
    }
}

// Eventi
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
