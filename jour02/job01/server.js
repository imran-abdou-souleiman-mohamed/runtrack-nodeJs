const http = require('http');

// Fonction pour configurer et démarrer le serveur
function startServer() {
    // Créer le serveur
    const server = http.createServer((req, res) => {
        // Gestionnaire d'événements pour les requêtes entrantes
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!\n');
    });

    // Définir le port sur lequel le serveur écoutera les requêtes
    const port = process.env.PORT || 8888;

    // Démarrer le serveur et écouter le port spécifié
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

// Exporter la fonction startServer pour pouvoir l'utiliser dans index.js
module.exports = startServer;