// Write a program that uses a single asynchronous filesystem operation to  
// read a file and print the number of newlines it contains to the console  
// (stdout), similar to running cat file | wc -l.  


const fs = require('fs')
// fs.readFile( filename, encoding, callback_function ) non-blocking asynchronous way

fs.readFile(process.argv[2], 'utf8', (err, strData) => {
    if (!err) {
        const lines = strData.split('\n').length - 1
        console.log(lines)
    }
})