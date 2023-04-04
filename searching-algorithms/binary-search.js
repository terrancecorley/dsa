function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let pivotIndex = Math.floor((left + right) / 2);
        let pivot = arr[pivotIndex];

        if (pivot === val) {
            return pivotIndex;
        } else if (pivot > val) {
            right = pivotIndex  - 1;
        } else if (pivot < val) {
            left = pivotIndex + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));