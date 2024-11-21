
async function selectionSort(array) {
    const bars = document.getElementsByClassName('flex-item');
    const speed = 300 - speedInput.value; // Adjust speed dynamically

    for (let i = 0; i < array.length - 1; i++) {
        let max = i;

        // Highlight the current max element position
        bars[max].style.backgroundColor = "red";

        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "yellow"; // Highlight the comparison bar
            await new Promise(resolve => setTimeout(resolve, speed)); // Pause to visually show comparison

            // If a new maximum element is found
            if (array[j] < array[max]) {
                if (max !== i) {
                    bars[max].style.backgroundColor = "cyan"; // Reset previous max bar to cyan
                }
                max = j; // Update max index
                bars[max].style.backgroundColor = "red"; // Highlight the new max bar
            } else {
                bars[j].style.backgroundColor = "cyan"; // Reset comparison bar color to cyan
            }
        }

        // If max is not at the correct position, swap it with the last unsorted element
        if (max !== i) {
            // Swap elements in the array
            [array[max], array[i]] = [array[i], array[max]];

            // Update bar heights to reflect the new positions
            bars[max].style.height = `${array[max]}%`;
            bars[i].style.height = `${array[i]}%`;

            // Finalize the sorted bar with green color
            bars[i].style.backgroundColor = "green"; // The swapped element is now sorted
            bars[max].style.backgroundColor = "cyan"; // Reset the max bar to cyan (no longer highlighted)
        }

        // Optional: Finalize the position of the sorted bar
        bars[i].style.backgroundColor = "green"; // Make sure the element is marked as sorted
    }

    // Finalize the first element as sorted
    bars[array.length - 1].style.backgroundColor = "green";
}
