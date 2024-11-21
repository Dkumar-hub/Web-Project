async function mergeSort(array) {
    const bars = document.getElementsByClassName('flex-item');
    const speed = 300 - speedInput.value; // Adjust speed dynamically

    async function merge(array, leftIndex, mid, rightIndex) {
        const left = array.slice(leftIndex, mid + 1);
        const right = array.slice(mid + 1, rightIndex + 1);

        let i = 0, j = 0, k = leftIndex;

        while (i < left.length && j < right.length) {
            // Highlight bars being compared
            bars[k].style.backgroundColor = "yellow";

            await new Promise(resolve => setTimeout(resolve, speed)); // Delay for visual effect

            if (left[i] <= right[j]) {
                array[k] = left[i];
                bars[k].style.height = `${left[i]}%`; // Update bar height
                i++;
            } else {
                array[k] = right[j];
                bars[k].style.height = `${right[j]}%`; // Update bar height
                j++;
            }

            // Reset color after comparison
            bars[k].style.backgroundColor = "cyan";
            k++;
        }

        // Copy remaining elements of `left`, if any
        while (i < left.length) {
            array[k] = left[i];
            bars[k].style.height = `${left[i]}%`; // Update bar height
            bars[k].style.backgroundColor = "cyan";
            i++;
            k++;
            await new Promise(resolve => setTimeout(resolve, speed)); // Delay
        }

        // Copy remaining elements of `right`, if any
        while (j < right.length) {
            array[k] = right[j];
            bars[k].style.height = `${right[j]}%`; // Update bar height
            bars[k].style.backgroundColor = "cyan";
            j++;
            k++;
            await new Promise(resolve => setTimeout(resolve, speed)); // Delay
        }
    }

    async function divide(array, leftIndex, rightIndex) {
        if (leftIndex >= rightIndex) return;

        const mid = Math.floor((leftIndex + rightIndex) / 2);

        // Recursively divide
        await divide(array, leftIndex, mid);
        await divide(array, mid + 1, rightIndex);

        // Merge the divided arrays
        await merge(array, leftIndex, mid, rightIndex);

        // Finalize sorted section in green
        for (let i = leftIndex; i <= rightIndex; i++) {
            bars[i].style.backgroundColor = "green";
        }
    }

    // Start sorting
    await divide(array, 0, array.length - 1);
}
