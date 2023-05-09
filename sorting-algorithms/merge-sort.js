// my attempt before video
function mergeSort(arr1, arr2) {
    // given two sorted arrays
    // create empty results arr
    // we need to have two pointers
        // from beg to end for each arr
        // if one arr is shorter, append remaining values from the other arr
    // return arr
    let results = [];
    let arr1Pointer = 0;
    let arr2Pointer = 0;

    while (arr1Pointer < arr1.length || arr2Pointer < arr2.length) {
        if (arr1Pointer === arr1.length - 1) {
            results.push(arr2Pointer);
            arr2Pointer++
        } else if (arr2Pointer === arr2.length - 1) {
            results.push(arr1Pointer);
            arr1Pointer++
        } else {
            if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
                results.push(arr1[arr1Pointer]);
                arr1Pointer++;
            } else {
                results.push(arr2[arr2Pointer]);
                arr2Pointer++;
            }
        }
    }
    
    return results;
}

// console.log(mergeSort([1,2,3], [8, 9, 10]));

// Works given two sorted arrays
function merge(arr1, arr2) {
    let results = [];

    let arr1Pointer = 0;
    let arr2Pointer = 0;

    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
        if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
            results.push(arr1[arr1Pointer]);
            arr1Pointer++;
        } else {
            results.push(arr2[arr2Pointer]);
            arr2Pointer++;
        }
    }

    while (arr1Pointer < arr1.length) {
        results.push(arr1[arr1Pointer]);
        arr1Pointer++;
    }

    while (arr2Pointer < arr2.length) {
        results.push(arr2[arr2Pointer]);
        arr2Pointer++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([2, 3, 1, 5]));
