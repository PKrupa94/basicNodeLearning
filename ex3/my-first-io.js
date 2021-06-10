// Write a program that uses a single synchronous filesystem operation to  
// read a file and print the number of newlines (\n) it contains to the  
// console (stdout), similar to running cat file | wc -l. 

// readFileSync:-reading file in synchoronous way so node.js block other process and just do current file reading process
const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2]) //method return buffer object with complete content of file
const strFileContent = buffer.toString() //convert buffer object to string
const numOfLines = strFileContent.split('\n').length - 1 //split the string with new line and last line have not newline so length-1
console.log(numOfLines)

