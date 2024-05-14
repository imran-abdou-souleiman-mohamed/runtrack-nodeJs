const fs = require('fs');

// Chemin du fichier
const filePath = 'data.txt';

// Nouveau contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node !";

// Écriture du nouveau contenu dans le fichier de manière asynchrone
fs.writeFile(filePath, newContent, (err) => {
    if (err) {
        console.error('Erreur lors de l\'écriture dans le fichier:', err);
        return;
    }

    console.log('Je manipule les fichiers avec un module node !');
});