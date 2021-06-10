// Write a program that performs an HTTP GET request to a URL provided to you  
// as the first command-line argument. Collect all data from the server (not  
// just the first "data" event) and then write two lines to the console  
// (stdout). 

const http = require('http')
const requestUrl = process.argv[2]
http.get(requestUrl, (response) => {
    response.setEncoding('utf-8')
    var finalResult = ''
    response.on('data', (data) => {
        finalResult += data.toString()
    })
    response.on('end', () => {
        console.log(finalResult.length) //print number of the character 
        console.log(finalResult) //print complete string of character
    })
}).on('error', (err) => {
    console.error('Error in request:', err)
})