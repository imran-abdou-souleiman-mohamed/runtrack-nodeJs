const fs = require('fs');

// Path to the data.txt file
const filePath = 'data.txt';

// Read the contents of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  // Display the content in the terminal
  console.log('File content:');
  console.log(data);
});