// Create a program that prints a list of files in a given directory,  
// filtered by the extension of the files. The first argument is the  
// directory name and the second argument is the extension filter. Print the  
// list of files (one file per line) to the console. You must use  
// asynchronous I/O.

const fs = require('fs')
const filePath = require('path')

function getFileByExtension(dirName, fileExtension, callback) {
    const fileExt = '.' + fileExtension
    fs.readdir(dirName, (error, arrFiles) => {
        if (error) {
            //if error return error with null result
            callback(error, null);
        } else {
            //if not an error return arr of files with filter extension 
            arrResult = [];
            arrFiles.forEach(file => {
                //filePath.extName retun extension of the file from . to end
                if (filePath.extname(file) === fileExt) {
                    arrResult.push(file)
                }
            })
            callback(null, arrResult);
        }
    })
}

module.exports = getFileByExtension