// Write a TCP time server!  

// Your server should listen to TCP connections on the port provided by the  
// first argument to your program. For each connection you must write the  
// current date & 24 hour time in the format:  

//      "YYYY-MM-DD hh:mm" 

const net = require('net') //help to create a server and client
const port = process.argv[2]

function verifyForTwoDigit(digit) {
    //if digit is sigle then we are appending 0 with the digit
    return (digit < 10 ? '0' + digit : digit)
}

const server = net.createServer((socket) => {
    let date = new Date()
    //"YYYY-MM-DD hh:mm" 
    let strDate = date.getFullYear() + "-"
        + verifyForTwoDigit(date.getMonth() + 1) + "-" //getMonth start from 0 so adding + 1 for current month
        + verifyForTwoDigit(date.getDate()) + " "
        + verifyForTwoDigit(date.getHours()) + ':'
        + verifyForTwoDigit(date.getMinutes()) + '\n'
    socket.end(strDate)
})
server.listen(port)