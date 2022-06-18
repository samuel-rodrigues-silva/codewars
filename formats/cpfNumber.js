const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]

function createCpfNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(...)(.*)/, '$1.$2.$3-$4')
}

console.log(createCpfNumber(numbers2))
