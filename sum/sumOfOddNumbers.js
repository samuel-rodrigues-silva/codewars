//  triangle example 
//                 1
//             3       5
//         7       9       11
//     13      15      17      21

// Insert a number as n and return the sum of the triangle specific n row
// rowSumOddNumbers(1) => 1
// rowSumOddNumbers(2) => 8
// rowSumOddNumbers(3) => 27


function sumRowOddNumbers(n) {
    if (n === 0) return 0
    const treeTotalLenght = eval(Array(n + 1).fill(0).map((_, i) => `+${i}`).join(''))
    const oddNumbers = []
    let count = 0
    do {
        if ((count % 2) !== 0) {
            oddNumbers.push(count)
        }
        count++
    } while (oddNumbers.length < treeTotalLenght)
    return eval(oddNumbers.slice(oddNumbers.length - n, oddNumbers.length).join('+'))
}

console.log(sumRowOddNumbers(4))
