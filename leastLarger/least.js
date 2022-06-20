// Given an array of numbers and an index,
// return either the index of the smallest number that is larger than the element at the given index,
// or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

function leastLarger(list, n) {
    if (n >= list.length) return 'Nothing'
    const greaterIndex = []
    list.forEach((element, i) => {
        if (element > list[n]) {
            greaterIndex.push(i)
        }
    });
    let least = list[greaterIndex[0]]
    if (!least) return -1
    let indexLeast = greaterIndex[0]
    greaterIndex.forEach((index) => {
        if (list[index] < least) {
            least = list[index]
            indexLeast = index
        }
    })
    return indexLeast
}
console.log(leastLarger([4, 1, 3, 5, 6], 5))
console.log(leastLarger([4, 1, 3, 5, 6], 0))
console.log(leastLarger([4, 1, 3, 5, 6], 4))
console.log(leastLarger([1, 3, 5, 2, 4], 0))