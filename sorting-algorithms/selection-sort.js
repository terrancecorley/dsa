function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// my attempt without watching the video
// function selectionSort(arr) {
//     if (!Array.isArray(arr) || !arr.length) return undefined;

//     // create swap var, set to false
//     let swaps = false;
//     // start loop at beginning, increment as we go
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr.length - 1; j > 0; j--) {
//             let currentValue = arr[j];
//             let valueToComare = arr[j - 1];
//             if (currentValue < valueToComare) {
//                 swap(arr, arr[j], arr[j - 1]);
//                 swaps = true;
//                 console.log(arr)
//             }
//         }

//         if (!swaps) break;
//     }
//         // if swap is false, break the outer loop
//     // inner loop will begin at the end of the array
//     // if value is less than the next val, swap
//         // set swap to true
//     // return arr

//     return arr;
// }

function selectionSort(arr) {
    if (!Array.isArray(arr) || !arr.length) return undefined;
    
    for (let i = 0; i < arr.length; i++) {
        let smallestValueIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestValueIndex]) {
                smallestValueIndex = j;
            }
        }

        if (i !== smallestValueIndex) {
            swap(arr, i, smallestValueIndex);
        }
    } 

    return arr;
}

console.log(selectionSort([2, 4, 1, 6]));
