const mymodule = require('./mymodule.js') //import mymodule.js to call function inside it

const dirPath = process.argv[2] //dir Path
const fileExtension = process.argv[3]

//this will call getFileByExtension in mymodule
mymodule(dirPath, fileExtension, (err, arrFilesWithExt) => {
    if (!err) {
        arrFilesWithExt.forEach(file => {
            console.log(file)
        })
    } else {
        console.error('Error while fetching files', err)
    }
})