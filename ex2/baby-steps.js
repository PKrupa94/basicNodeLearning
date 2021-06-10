// Write a program that accepts one or more numbers as command-line arguments  
//   and prints the sum of those numbers to the console (stdout). 

//loop starts from 2 because 0 and 1 element contain whole command line invocation 0 will return node and 1 will return file name
let finalSum = 0;
for (let i = 2; i < process.argv.length; i++) {
    //Using number I am making sure that args which I added to finalsum is number.otherwise if it will append the string if argument is string 
    finalSum += Number(process.argv[i])
}

console.log(finalSum)