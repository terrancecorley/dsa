// my working version of getDigit
function getDigit(num, place) {
    if (isNaN(num) || isNaN(place)) return undefined;

    let numStringified = Math.abs(num).toString();
    if (place >= numStringified.length || place < 0) return undefined;
    
    return numStringified[numStringified.length - 1 - place];
}

// video version of getDigit
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// my working version of digitCount
function digitCount(num) {
    if (isNaN(num)) return undefined;

    return Math.abs(num).toString().length;
}

// video version of digitCount
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// my working solution
function mostDigits(nums) {
    let biggestDigit = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentValue = Math.abs(nums[i]).toString();
        if (currentValue.length > biggestDigit) {
            biggestDigit = currentValue.length;
        }
    }

    return biggestDigit;
}

// solution from video
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

// not a comparison sort
// works on numbers
function radixSort(nums) {
    const mostDigitsResult = mostDigits(nums);

    for (let k = 0; k < mostDigitsResult; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort([2, 1, 100, 10]))