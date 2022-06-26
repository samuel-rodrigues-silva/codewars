// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing 
// second character of the final pair with an underscore ('_').

function solution(str){
    return str.length
      ?
      str.replace(/\w{2}/g,'$& ')
        .replace(/(\w{1}$)/,'$1_')
          .split('  ')
            .join('')
              .trim()
                .split(' ')
    : []
}
console.log(solution('abcdef '))