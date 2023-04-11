// not all that efficient, not commonly used
// algo where largest values "bubble" to the top

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// My original function
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 swap(arr, i, j);
//             }
//         }
//     }

//     return arr;
// }

// Function after watching video
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([2, 343, 2, 4, 1, 9, 3]));