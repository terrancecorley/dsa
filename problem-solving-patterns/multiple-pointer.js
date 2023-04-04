// Create a function that will accept a sorted array of integers and return the first pair that sums to zero. If no pair is found, return undefined.
function sumZero(arr) {
    // create a left start pointer
    // create a right start pointer
    if (!Array.isArray(arr) || arr.length < 2) return false;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero([-3, -2, 0, 1, 2, 3]));

// Create an array that takes in a sorted array of integers and return an array of the unique values
function countUniqueValues(arr) {
    // is not array return false
    if (!Array.isArray(arr)) return false;
    // if length is one, return the array
    if (arr.length === 1) return arr;

    // create a new array clone
    let arrClone = [...arr];

    let pointerOne = 0;
    let pointerTwo = 1;

    while (pointerTwo < arrClone.length) {
        let pointerOneItem = arrClone[pointerOne];
        let pointerTwoItem = arrClone[pointerTwo];

        if (pointerOneItem === pointerTwoItem) {
            pointerTwo++;
        } else {
            pointerOne++;
            arrClone[pointerOne] = pointerTwoItem;
        }
    }

    return arrClone.slice(0, pointerOne + 1);
}

// console.log(countUniqueValues([1, 1, 2]));

// Create a function that takes in an array and an integer, the integer is number of digits we want to fix the max sum for in the array. The array may not be sorted
function maxSubArray(arr, num) {
    if (num > arr.length) return null;
    if (!Array.isArray(arr) || isNaN(num) || !arr.length) return null;
    if (num === arr.length) return arr.reduce((a, b) => a + b);
    
    let maxSum = null;
    let tempSum = null;
    
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    
    return maxSum;
}

// console.log(maxSubArray([2,1,2,3], 2));
