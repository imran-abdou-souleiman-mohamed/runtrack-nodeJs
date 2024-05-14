const fs = require('fs');

// Chemin du fichier
const filePath = 'data.txt';

// Lecture du contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture du fichier:', err);
        return;
    }

    // Séparation des lettres du texte
    const letters = data.split('');

    // Affichage des lettres sur deux
    let result = '';
    for (let i = 0; i < letters.length; i += 2) {
        result += letters[i];
    }

    // Affichage du résultat dans le terminal
    console.log(result);
});