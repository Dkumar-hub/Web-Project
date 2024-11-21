async function quickSort(array) {
    const bars = document.getElementsByClassName('flex-item');
    const speed = 300 - speedInput.value; // Adjust speed dynamically

    // Helper function to partition the array
    async function partition(array, low, high) {
        let pivot = array[high]; // Choose the last element as the pivot
        let i = low - 1;

        // Highlight the pivot bar
        bars[high].style.backgroundColor = "red";

        for (let j = low; j < high; j++) {
            // Highlight the current bar being compared
            bars[j].style.backgroundColor = "yellow";

            await new Promise(resolve => setTimeout(resolve, speed)); // Delay for visualization

            if (array[j] < pivot) {
                i++;
                // Swap array[i] and array[j]
                [array[i], array[j]] = [array[j], array[i]];

                // Reflect the swap in the bar heights
                bars[i].style.height = `${array[i]}%`;
                bars[j].style.height = `${array[j]}%`;

                bars[i].style.backgroundColor = "orange"; // Mark swapped bar
            }

            // Reset comparison bar color
            bars[j].style.backgroundColor = "cyan";
        }

        // Swap the pivot element with the element at index (i + 1)
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        bars[i + 1].style.height = `${array[i + 1]}%`;
        bars[high].style.height = `${array[high]}%`;

        // Mark the pivot bar as sorted
        bars[high].style.backgroundColor = "cyan";
        bars[i + 1].style.backgroundColor = "green";

        return i + 1;
    }

    // Recursive function to sort the array
    async function quickSortRecursive(array, low, high) {
        if (low < high) {
            // Partition the array and get the pivot index
            const pivotIndex = await partition(array, low, high);

            // Recursively sort elements before and after the pivot
            await quickSortRecursive(array, low, pivotIndex - 1);
            await quickSortRecursive(array, pivotIndex + 1, high);
        }

        // Mark all bars as sorted after recursion completes
        if (low >= 0 && high >= 0) {
            for (let k = low; k <= high; k++) {
                bars[k].style.backgroundColor = "green";
            }
        }
    }

    // Start the sorting process
    await quickSortRecursive(array, 0, array.length - 1);
}
