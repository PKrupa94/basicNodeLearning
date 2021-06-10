// Write an HTTP server that serves the same text file for each request it  
// receives.  

// Your server should listen on the port provided by the first argument to  
// your program. 

const http = require('http');
const fs = require('fs')
const port = process.argv[2]

const server = http.createServer((request, response) => {
    stmObj = fs.createReadStream(process.argv[3]) //create a stream of file which given from cmd
    stmObj.pipe(response)  //piping the output of a readable stream(stmObj) as the input of a writable stream 
})
server.listen(port)