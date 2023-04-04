// create a function that takes a sorted arr of ints and a number, it returns the index where the number is or if not found, returns -1
function findInteger(haystack, needle) {
    // add validation checks

    // check the middle point
    // if needle is higher than middle point, remove the bottom half, try again
    // else if needle is lower, remove top half half and try again
    // if needle matches, return the needle index
    let min = 0;
    let max = haystack.length - 1;

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2);
        let currentElement = haystack[middleIndex];

        if (currentElement < needle) {
            min = middleIndex + 1;
        } else if (currentElement > needle) {
            max = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

// console.log(findInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
