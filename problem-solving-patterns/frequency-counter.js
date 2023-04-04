
// Write a function that takes in two arrays and returns true if the frequency of chars is the same between arrays
// Solution does not account for integer typing so string nums and ints are treated the same

function frequencyCounter(arrOne, arrTwo) {
    if (
        !Array.isArray(arrOne) ||
        !Array.isArray(arrTwo) ||
        arrOne.length !== arrTwo.length
    ) return false;
    
    // Loop & create the first obj to hold the values of the first arr
    const arrOneFrequency = {};
    const arrTwoFrequency = {};
    
    for (let i = 0; i < arrOne.length; i++) {
        // Check arrOne to see if val exists, if it exists then incremenent, if not then set
        arrOneFrequency[arrOne[i]] = arrOneFrequency[arrOne[i]] > 0 ? arrOneFrequency[arrOne[i]]++ : 1; 
    }
    
    // Loop & create the second obj to hold the values of the second arr
    for (let i = 0; i < arrTwo.length; i++) {
        // Check arrOne to see if val exists, if it exists then incremenent, if not then set
        arrTwoFrequency[arrTwo[i]] = arrTwoFrequency[arrTwo[i]] > 0 ? arrTwoFrequency[arrTwo[i]]++ : 1;
    }

    // Loop again through the first arr and compare the frequency, if frequency is wrong return false, else return true 
    for (let key in arrOneFrequency) {
        // if key not in arrTwo, return false
        // if key val not ===, return false
        if (arrTwoFrequency[key] === undefined || arrOneFrequency[key] !== arrTwoFrequency[key]) {
            return false;
        }
    }

    return true;
}

// console.log(frequencyCounter(['a', 'b', '1'], ['a', 'b', 1]));

// Write a function that takes in two arrays and returns true if every val in the array has it's value squared in the second array. The frequency of the values must be the same.

function checkSquareFrequency(arr1, arr2) {
    // if either array is empty or if the lengths are not identical, return false
    if (!arr1.length || !arr2.length || arr1.length !== arr2.length) {
        return false;
    }

    // create two objs to hold the square vals and frequnecy
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // loop through the first array and manipulate that obj
    for (let i = 0; i < arr1.length; i++) {
        let currentValue = arr1[i];
        frequencyCounter1[currentValue ** 2] = frequencyCounter1[currentValue ** 2] ? frequencyCounter1[currentValue ** 2] += 1 : 1; 
    } 

    // loop through the second array and manipulate that obj
    for (let i = 0; i < arr2.length; i++) {
        let currentValue = arr2[i];
        frequencyCounter2[currentValue] = frequencyCounter2[currentValue] ? frequencyCounter2[currentValue] += 1 : 1; 
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;

        if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
    }

    return true;
}

// console.log(checkSquareFrequency([1,2,3], [1, 4, 9]));

// Create a function that takes two strings and returns true if both strings are anagrams
function isAnagrams(string1, string2) {
    // is either arg is not a string or the lengths don't match, return false
    if (
        typeof string1 !== 'string' || 
        typeof string2 !== 'string' ||
        string1.length !== string2.length
    ) {
        return false;
    }
    
    // create two objects to host each char and it's frequency 
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // loop through the arrays and create the objects
    for (let i = 0; i < string1.length; i++) {
        let currentValue = string1[i];
        frequencyCounter1[currentValue] = frequencyCounter1[currentValue] ? frequencyCounter1[currentValue] += 1 : 1; 
    } 

    for (let i = 0; i < string2.length; i++) {
        let currentValue = string2[i];
        frequencyCounter2[currentValue] = frequencyCounter2[currentValue] ? frequencyCounter2[currentValue] += 1 : 1; 
    }

    // loop through the first object and compare against the second, checking for the key and the value to match, if not, return false
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;

        if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
    }

    return true;
}

console.log(isAnagrams('racecar', 'carrace'));
