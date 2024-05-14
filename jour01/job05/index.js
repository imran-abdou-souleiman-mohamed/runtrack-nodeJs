const path = require('path');


const filePath = 'C:\\Users\\Aaron\\OneDrive\\Documents\\runtrack-nodeJS\\runtrack-nodeJS\\jour01\\job05\\index.js';
const fileName = path.basename(filePath);
console.log('Nom du fichier:', fileName);


const fileExtension = path.extname(filePath);
console.log('Extension du fichier:', fileExtension);


const parentDirectory = path.dirname(filePath);
console.log('Répertoire parent du fichier:', parentDirectory);