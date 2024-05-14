const fs = require('fs');

// Path to the data.txt file
const filePath = 'data.txt';

try {
    // Read file synchronously
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Display content in the terminal
    console.log(fileContent);
} catch (error) {
    console.error('Error reading the file:', error);
}