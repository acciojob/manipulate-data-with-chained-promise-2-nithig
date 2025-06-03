//your JS code here. If required.
function delay(ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        }

        // Initial promise that resolves with the array after 3 seconds
        function getInitialArray() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Function to manipulate array using chained promises
        function manipulateArrayWithPromises() {
            const outputDiv = document.getElementById('output');
            const startBtn = document.getElementById('startBtn');
            const resetBtn = document.getElementById('resetBtn');
            
            // Disable start button and show loading
            startBtn.disabled = true;
            outputDiv.innerHTML = '<span class="loading">Loading initial array (3 seconds)...</span>';
            
            // Start the promise chain
            getInitialArray()
                .then(array => {
                    console.log('Initial array received:', array);
                    outputDiv.innerHTML = '<span class="loading">Filtering odd numbers (1 second)...</span>';
                    
                    // Filter out odd numbers and add 1-second delay
                    return delay(1000).then(() => {
                        const evenNumbers = array.filter(num => num % 2 === 0);
                        console.log('Filtered even numbers:', evenNumbers);
                        
                        // Update DOM with filtered result
                        outputDiv.textContent = evenNumbers.join(',');
                        
                        return evenNumbers;
                    });
                })
                .then(evenNumbers => {
                    console.log('Processing even numbers for multiplication...');
                    outputDiv.innerHTML = `${evenNumbers.join(',')} <span class="loading" style="font-size: 14px; display: block; margin-top: 10px;">Multiplying by 2 (2 seconds)...</span>`;
                    
                    // Multiply each even number by 2 and add 2-second delay
                    return delay(2000).then(() => {
                        const multipliedNumbers = evenNumbers.map(num => num * 2);
                        console.log('Multiplied numbers:', multipliedNumbers);
                        
                        // Update DOM with final result
                        outputDiv.textContent = multipliedNumbers.join(',');
                        
                        return multipliedNumbers;
                    });
                })
                .then(finalResult => {
                    console.log('Final result:', finalResult);
                    // Re-enable start button
                    startBtn.disabled = false;
                })
                .catch(error => {
                    console.error('Error in promise chain:', error);
                    outputDiv.textContent = 'Error occurred';
                    startBtn.disabled = false;
                });
        }

        // Alternative implementation using async/await (commented out)
        /*
        async function manipulateArrayWithAsyncAwait() {
            const outputDiv = document.getElementById('output');
            const startBtn = document.getElementById('startBtn');
            
            try {
                startBtn.disabled = true;
                outputDiv.innerHTML = '<span class="loading">Loading initial array (3 seconds)...</span>';
                
                // Get initial array after 3 seconds
                const initialArray = await getInitialArray();
                console.log('Initial array received:', initialArray);
                
                // Filter odd numbers after 1 second delay
                outputDiv.innerHTML = '<span class="loading">Filtering odd numbers (1 second)...</span>';
                await delay(1000);
                
                const evenNumbers = initialArray.filter(num => num % 2 === 0);
                console.log('Filtered even numbers:', evenNumbers);
                outputDiv.textContent = evenNumbers.join(',');
                
                // Multiply by 2 after 2 second delay
                outputDiv.innerHTML = `${evenNumbers.join(',')} <span class="loading" style="font-size: 14px; display: block; margin-top: 10px;">Multiplying by 2 (2 seconds)...</span>`;
                await delay(2000);
                
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                console.log('Multiplied numbers:', multipliedNumbers);
                outputDiv.textContent = multipliedNumbers.join(',');
                
                startBtn.disabled = false;
            } catch (error) {
                console.error('Error:', error);
                outputDiv.textContent = 'Error occurred';
                startBtn.disabled = false;
            }
        }
        */

        // Reset function
        function resetOutput() {
            const outputDiv = document.getElementById('output');
            const startBtn = document.getElementById('startBtn');
            
            outputDiv.textContent = '';
            startBtn.disabled = false;
        }

        // Event listeners
        document.getElementById('startBtn').addEventListener('click', manipulateArrayWithPromises);
        document.getElementById('resetBtn').addEventListener('click', resetOutput);