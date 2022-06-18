const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


function regexPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

function reducePhoneNumber(numbers) {

    return numbers.reduce((prev, curr, index) => {
        if (index == 0) {
            return prev += "(" + curr
        } else if (index == 2) {
            return prev += curr + ") "
        } else if (index == 5) {
            return prev += curr + "-"
        } else {
            return prev += curr
        }
    }, [])
}

function createPhoneNumber(numbers) {
    let phoneNumber = '';
    numbers.map((numb, index) => {
        if (index == 0) {
            phoneNumber += "(" + numb
        } else if (index == 2) {
            phoneNumber += numb + ") "
        } else if (index == 5) {
            phoneNumber += numb + "-"
        } else {
            phoneNumber += numb
        }
    })
    return phoneNumber
}

console.log(regexPhoneNumber(numbers))
console.log(reducePhoneNumber(numbers))
console.log(createPhoneNumber(numbers))