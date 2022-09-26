// Read input.txt and convert the data to 2D Array
const fs = require('fs')
const inputBuffer = fs.readFileSync('./input.txt')
const inputString = inputBuffer.toString()
let input2d = []
input2d = inputString.split("\n").map(function (e) {
    return e.split(" ").map(Number);
})

// Check the number if its prime or not
const isPrime = (x) => {
    if (x => 2) {
        for (let i = 2; i <= x - 1; i++) {
            if (x % i === 0) {
                return false
            }
        }
        return true
    }
}

//Convert all prime numbers to "0"
for (let i = 0; i <= input2d.length - 1; i++) {
    for (let j = 0; j <= input2d[i].length - 1; j++) {
        if (isPrime(input2d[i][j])) {
            input2d[i][j] = 0
        }
    }
}

//Find summary by using Space Optimization (Changing input matrix) 
const maxSum = () => {

    for (let i = 13; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {

            if (input2d[i + 1][j] > input2d[i + 1][j + 1]){
                input2d[i][j] += input2d[i + 1][j];
            }
            else{
                input2d[i][j] += input2d[i + 1][j + 1]
            }
        }

    }
    return input2d[0][0];
}
console.log(maxSum())