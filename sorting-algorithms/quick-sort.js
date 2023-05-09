// attempt before video
// pivot in the middle is ideal if arr is sorted/near sorted, did not implement here
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([2,3,90,1,34,2,4,3,24,30,100]));