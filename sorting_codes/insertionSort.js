async function insertionSort(array) {
    const bars = document.getElementsByClassName('flex-item');
    const speed = 300 - speedInput.value;

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        // Highlight the current key bar
        bars[i].style.backgroundColor = "yellow";

        // Move elements of the sorted portion that are greater than `key`
        while (j >= 0 && array[j] > key) {
            // Highlight comparison bars
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red"; // Compare adjacent bars

            // Update heights to simulate swapping
            bars[j + 1].style.height = `${array[j]}%`; // Move bar height
            array[j + 1] = array[j]; // Update array values

            // Add delay to visually show the change
            await new Promise(resolve => setTimeout(resolve, speed));

            // Reset comparison bars to cyan
            bars[j].style.backgroundColor = "cyan";
            bars[j + 1].style.backgroundColor = "cyan";
            j--;
        }

        // Insert the key at the correct position
        array[j + 1] = key;
        bars[j + 1].style.height = `${key}%`; // Place the key bar in the right position

        // Finalize the sorted bars with green
        for (let k = 0; k <= i; k++) {
            bars[k].style.backgroundColor = "green"; // Mark as sorted
        }

        // Add delay to visualize the sorting step
        await new Promise(resolve => setTimeout(resolve, speed));
    }

    // Ensure all bars are finalized as sorted
    for (let i = 0; i < array.length; i++) {
        bars[i].style.backgroundColor = "green"; // Final green for all sorted bars
    }
}
