// The Western Suburbs Croquet Club has two categories of
// membership, Senior and Open.They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years
// old and have a handicap greater than 7. In this croquet club,
// handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data) {
    return data.map(member => {
        if (member[0] >= 55 && member[1] > 7) return 'Senior'
        return 'Open'
    })
}


function openOrSenior2(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))