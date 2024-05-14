const path = require('path');
const fs = require('fs');
//joining path of parent directory 
const directoryPath = path.resolve(__dirname, '../');
//passing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        console.log(file);
    });
});