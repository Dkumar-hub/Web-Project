document.addEventListener("DOMContentLoaded", function () {
    const barsContainer = document.getElementById('bars');
    const arraySizeInput = document.getElementById('array_size');
    const speedInput = document.getElementById('speed_input');

    // Function to create an array of random heights for the bars
    function createRandomArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 100) + 1); // Random heights between 1 and 100%
        }
        return array;
    }

    // Function to generate and display bars
    function generateBars(array) {
        // Clear any existing bars
        barsContainer.innerHTML = '';

        // Create and append bars
        array.forEach(height => {
            const bar = document.createElement('div');
            bar.classList.add('flex-item');
            bar.style.height = `${height}%`;
            barsContainer.appendChild(bar);
        });
    }

    // Function to disable buttons
    function toggleButtons(disable){
        const buttons = document.querySelectorAll('button');
        const speedInput = document.getElementById('speed_input');
        buttons.forEach(buttons =>{ buttons.disabled = (disable == 'true');})

        speedInput.disabled = (disable == 'true')

    }

    // Initial array and bars generation
    let arraySize = arraySizeInput.value;
    let barsArray = createRandomArray(arraySize);
    generateBars(barsArray);

    // Event listener to regenerate bars when array size changes
    arraySizeInput.addEventListener('input', function () {
        arraySize = arraySizeInput.value;
        barsArray = createRandomArray(arraySize);
        generateBars(barsArray);
    });

    // Event listener to generate a new random array when "New Array" button is clicked
    document.querySelector('.newArray').addEventListener('click', function () {
        barsArray = createRandomArray(arraySize);
        generateBars(barsArray);
    });

    //Event listener for implementing bubble Sort
    document.querySelector('.bubbleSort').addEventListener('click', async function () {
        toggleButtons('true');
        updateComplexity('bubbleSort')
        await bubbleSort(barsArray);
        toggleButtons('false');
    });

    document.querySelector('.selectionSort').addEventListener('click', async function () {
        toggleButtons('true');
        updateComplexity('selectionSort')
        await selectionSort(barsArray);
        toggleButtons('false');
    });

    document.querySelector('.insertionSort').addEventListener('click', async function () {
        toggleButtons('true');
        updateComplexity('insertionSort')
        await insertionSort(barsArray);
        toggleButtons('false');
    });

    document.querySelector('.mergeSort').addEventListener('click', async function () {
        toggleButtons('true');
        updateComplexity('mergeSort')
        await mergeSort(barsArray);
        toggleButtons('false');
    });

    document.querySelector('.quickSort').addEventListener('click', async function () {
        toggleButtons('true');
        updateComplexity('quickSort')
        await quickSort(barsArray);
        toggleButtons('false');
    });

    //function to update Time and space Complexity
    function updateComplexity(algorithm) {
        const timeWorst = document.getElementById('Time_Worst');
        const timeAverage = document.getElementById('Time_Average');
        const timeBest = document.getElementById('Time_Best');
        const spaceWorst = document.getElementById('Space_Worst');
    
        switch (algorithm) {
            case 'bubbleSort':
                timeWorst.textContent = "O(n²)";
                timeAverage.textContent = "O(n²)";
                timeBest.textContent = "O(n)";
                spaceWorst.textContent = "O(1)";
                break;
            case 'selectionSort':
            
                timeWorst.textContent = "O(n²)";
                timeAverage.textContent = "O(n²)";
                timeBest.textContent = "O(n²)";
                spaceWorst.textContent = "O(1)";
                break;
            case 'insertionSort':
            
                timeWorst.textContent = "O(n²)";
                timeAverage.textContent = "O(n²)";
                timeBest.textContent = "O(n)";
                spaceWorst.textContent = "O(1)";
                break;
            case 'quickSort':

                timeWorst.textContent = "O(n²)";
                timeAverage.textContent = "O(nlogn)";
                timeBest.textContent = "O(nlogn)";
                spaceWorst.textContent = "O(n)";
            case 'mergeSort':
                
                timeWorst.textContent = "O(nlogn)";
                timeAverage.textContent = "O(nlogn)";
                timeBest.textContent = "O(nlogn)";
                spaceWorst.textContent = "O(n)";
        }
    }
    
});
