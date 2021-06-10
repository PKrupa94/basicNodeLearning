// This problem is the same as the previous problem (HTTP COLLECT) in that  
// you need to use http.get(). However, this time you will be provided with  
// three URLs as the first three command-line arguments.  

// You must collect the complete content provided to you by each of the URLs  
// and print it to the console (stdout). You don't need to print out the  
// length, just the data as a String; one line per URL. The catch is that you  
// must print them out in the same order as the URLs are provided to you as  
// command-line arguments. 

const http = require('http')
const bl = require('bl')

var arrfinalResult = [] //for final result
var incrementalCount = 0 //count for number of the response so once every response done then it will display result

for (var i = 0; i < 3; i++) {
    getDataFromUrl(i)
}

function getDataFromUrl(index) {
    //process argv alredy 2 element allocated for node and file name so 2 + index
    http.get(process.argv[2 + index], (response => {
        response.pipe(bl(function (err, data) {
            if (err)
                throw err
            arrfinalResult[index] = data.toString() //data as a complete buffer object
            incrementalCount++

            if (incrementalCount == 3) {
                //print final result
                for (var i = 0; i < 3; i++) {
                    console.log(arrfinalResult[i])
                }
            }
        }))
    }))

}