// Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. You will be provided a directory  
//   name as the first argument to your program (e.g. '/path/to/dir/') and a  
//   file extension to filter by as the second argument.

const fs = require('fs') //import file system module
const path = require('path') // provides a way of working with directories and file paths
const fileExtension = '.' + process.argv[3] //as we are not passing argument with . so converting to .txt example
const dirPath = process.argv[2]
// fs.readdir( path, options, callback ) default option 'utf8'
fs.readdir(dirPath, (err, arrFiles) => {
    if (!err) {
        for (var i = 0; i < arrFiles.length; i++) {
            //filter the file with .txt extension
            // path.extname() method returns the extension of a file path
            if (path.extname(arrFiles[i]) === fileExtension) {
                console.log(arrFiles[i])
            }
        }
    } else {
        console.error("Error While reading dir", err)
    }
})