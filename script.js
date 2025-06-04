function delay(data, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), time);
  });
}

function manipulateArray() {
  // Step 1: Initial promise resolving after 3 seconds
  delay([1, 2, 3, 4], 3000)
    .then((array) => {
      // Step 2: Filter even numbers after a 1-second delay
      const evenNumbers = array.filter(num => num % 2 === 0);
      return delay(evenNumbers, 1000);
    })
    .then((filteredArray) => {
      // Update output div with filtered even numbers
      document.getElementById('output').textContent = filteredArray.join(',');
      
      // Step 3: Multiply by 2 after another 2-second delay
      const multiplied = filteredArray.map(num => num * 2);
      return delay(multiplied, 2000);
    })
    .then((finalArray) => {
      // Final update of output div with multiplied array
      document.getElementById('output').textContent = finalArray.join(',');
    })
    .catch((err) => {
      console.error('An error occurred:', err);
    });
}

// Run the function when the page loads
window.onload = manipulateArray;