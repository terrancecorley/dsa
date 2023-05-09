function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// my attempt before watching the video
// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let currentElement = arr[i];
//         let nextElement = arr[i + 1];

//         if (nextElement < currentElement) {
//             swap(arr, i, i + 1);
//         }

//         if (i > 0 && arr[i] < arr[i - 1]) {
//             let indexToSwap = 1;
//             for (let j = 0; j < i; j++) {
//                 if (arr[i] > arr[j] && arr[i] <= arr[j + 1]) {
//                     indexToSwap = j;
//                 }
//             }
//             swap(arr, i, indexToSwap)
//         }
//     }

//     return arr;
// }

// Big O is O n squared unless mostly sorted
// Good algo for taking in "live" data/strea  ming/sorting numbers live
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let indexToSwap = i;

        for (let j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
            arr[j + 1] = arr[j];
            indexToSwap = j;
        }
        arr[indexToSwap] = currentElement;
    }

    return arr;
}

console.log(insertionSort([2, 3, 1]));