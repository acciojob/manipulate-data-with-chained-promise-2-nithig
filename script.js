function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Returns initial array after 3 seconds
  function getInitialArray() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000); // 3 second delay
    });
  }

  function manipulateArrayWithPromises() {
    const outputDiv = document.getElementById("output");
    const startBtn = document.getElementById("startBtn");

    startBtn.disabled = true; // prevent repeated clicks
    outputDiv.textContent = ""; // clear output initially

    getInitialArray()
      .then(array => {
        // Step 1: Filter even numbers after a 1-second delay
        return delay(1000).then(() => {
          const evenNumbers = array.filter(num => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(","); // Display [2,4]
          return evenNumbers;
        });
      })
      .then(evenNumbers => {
        // Step 2: Multiply by 2 after 2-second delay
        return delay(2000).then(() => {
          const multiplied = evenNumbers.map(num => num * 2);
          outputDiv.textContent = multiplied.join(","); // Display [4,8]
          return multiplied;
        });
      })
      .catch(err => {
        outputDiv.textContent = "Error occurred";
        console.error(err);
      })
      .finally(() => {
        startBtn.disabled = false;
      });
  }

  document.getElementById("startBtn").addEventListener("click", manipulateArrayWithPromises);