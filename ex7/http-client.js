// Write a program that performs an HTTP GET request to a URL provided to you  
// as the first command-line argument. Write the String contents of each  
// "data" event from the response to a new line on the console (stdout).

const http = require('http');
const url = process.argv[2]
const request = http.get(url, (response) => {
    response.setEncoding('utf-8') //with this data event will return a string rather than standard node buffer
    //here response is a node stream as a object that release events mostly 'data','end'
    //'data' event emits when there is chuck of data available
    response.on('data', (data) => {
        console.log(data)
    })
    response.on('error', (error) => {
        console.error('Error while getting data:', error)
    })
})
request.on('error', (error) => {
    console.error('Error in request:', error)
})