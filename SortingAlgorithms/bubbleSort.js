function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];


console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array using Bubble Sort:", bubbleSort(unsortedArray));