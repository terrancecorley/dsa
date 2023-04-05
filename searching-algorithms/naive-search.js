function naiveSearch(str, pattern) {
    // loop over str
    // loop over pattern
    // if chars don't match, break out of inner loop
    // if the chars match, keep going
    // if you complete the inner loop and find a match, increment the count of matches
    // return the count
    // ex: abcdabc, abc
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] === str[i + j]) {
                if (j === pattern.length - 1) {
                    count++;
                }
                continue;
            } else {
                break;
            }
        }
    }

    return count;
}

console.log(naiveSearch('abcdabc', 'abc'));