// not all that efficient, not commonly used
// algo where largest values "bubble" to the top

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// My original function
function bubbleSortOriginal(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }

    return arr;
}

// Unoptimized function after watching video
// Outer loop moves from end to start
// inner loop begins at the start, checks the curr index, "bubbles" that value up
// the key is that we decrement in the outer loop each time we go through an inner loop cycle
    // basically, we skip needing to do unecessary checks because the values beyond the outer loop pointer are already sorted from prior loops
// keep track of swaps to end looping early if the arr is already sorted, can assume if we do no swaps that things are sorted

// Big O Time Complexity
// O(nsquared) average case
// O(n) is mostly sorted arr already
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let numOfSwaps = 0;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                numOfSwaps++;
            }
        }
        if (!numOfSwaps) break;
    }

    return arr;
}

// Optimized bubble sort function


console.log(bubbleSort([4, 1, 2, 3]));


