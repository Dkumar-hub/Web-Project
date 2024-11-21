const speedInput = document.getElementById('speed_input');

async function bubbleSort(array) {
    const bars = document.getElementsByClassName('flex-item');
    const speed = 300 - speedInput.value; // Inverse speed control (faster with higher slider value)

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(resolve, speed));

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                bars[j].style.height = `${array[j]}%`;
                bars[j + 1].style.height = `${array[j + 1]}%`;
            }

            bars[j].style.backgroundColor = "cyan";
            bars[j + 1].style.backgroundColor = "cyan";
        }
        bars[array.length - i - 1].style.backgroundColor = "green";
    }
    bars[0].style.backgroundColor = "green";
}
