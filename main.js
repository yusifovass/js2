// 1. Use `.push()` to add an element to an array.
// Complete the function to add the number `10` to the end of the array.
function addTen(arr) {
  arr.push(10); // Adds 10 to the end of the array
  return arr;   // Returns the modified array
}
// Test case
console.log(addTen([1, 2, 3, 4, 5])); // Expected output: [1, 2, 3, 4, 5, 10]

// 2. Use `.pop()` to remove the last element of an array.
// Complete the function to remove the last element from the array.
function removeLastElement(arr) {
  arr.pop(); // Removes the last element from the array
  return arr; // Returns the modified array
}
// Test case
console.log(removeLastElement(["apple", "banana", "cherry"])); // Expected output: ["apple", "banana"]

// 3. Use `.shift()` to remove the first element from an array.
// Complete the function to remove the first element from the array.
function removeFirstElement(arr) {
  arr.shift(); // Removes the first element from the array
  return arr;  // Returns the modified array
}


// Test case
console.log(removeFirstElement(["dog", "cat", "rabbit"])); // Expected output: ["cat", "rabbit"]

// 4. Use `.unshift()` to add an element to the beginning of an array.
// Complete the function to add "purple" to the beginning of the array.
function addPurple(arr) {
  arr.unshift("purple"); // Adds "purple" to the beginning of the array
  return arr;  // Returns the modified array
}

// Test case
console.log(addPurple(["red", "blue", "green"])); // Expected output: ["purple", "red", "blue", "green"]

// 5. Use `.map()` to create a new array where each number is doubled.
// Complete the function to return a new array where each number is multiplied by 2.
function doubleNumbers(arr) {
  return arr.map(num => num * 2); // Creates a new array with each number doubled
}

// Test case
console.log(doubleNumbers([1, 2, 3, 4])); // Expected output: [2, 4, 6, 8]

// 6. Use `.filter()` to create a new array with only numbers greater than 10.
// Complete the function to return a new array with numbers greater than 10.
function filterGreaterThanTen(arr) {
  return arr.filter(num => num > 10); // Filters numbers greater than 10
}

// Test case
console.log(filterGreaterThanTen([5, 12, 8, 20, 7, 15])); // Expected output: [12, 20, 15]

// 7. Use `.find()` to get the first number greater than 10.
// Complete the function to return the first number greater than 10.
function findFirstGreaterThanTen(arr) {
  return arr.find(num => num > 10); // Finds the first number greater than 10
}

// Test case
console.log(findFirstGreaterThanTen([5, 12, 8, 20, 7, 15])); // Expected output: 12

// 8. Use `.reduce()` to find the sum of all numbers in an array.
// Complete the function to return the sum of all numbers.
function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0); // Sums up all numbers in the array
}

// Test case
console.log(sumNumbers([1, 2, 3, 4, 5])); // Expected output: 15

// 9. Use `.includes()` to check if the array contains a given number.
// Complete the function to check if `num` is in the array.
function containsNumber(arr, num) {
  return arr.includes(num); // Checks if the array contains the given number
}
// Test case
console.log(containsNumber([3, 6, 9, 12], 6)); // Expected output: true
console.log(containsNumber([3, 6, 9, 12], 5)); // Expected output: false

// 10. Use `.reverse()` to reverse the order of elements in an array.
// Complete the function to return the reversed array.
function reverseArray(arr) {
  return arr.reverse(); // Reverses the order of elements in the array
}

// Test case
console.log(reverseArray(["a", "b", "c", "d"])); // Expected output: ["d", "c", "b", "a"]

// 11. BONUS: Don't use `.sort()` to sort an array of numbers in ascending order.
// Complete the function to return the sorted array.
function sortNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr; // Returns the sorted array
}

// Test case
console.log(sortNumbers([34, 7, 23, 32, 5, 62])); // Expected output: [5, 7, 23, 32, 34, 62]
