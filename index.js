// Runtime: O(n)
function hasTargetSum(array, target) {
  // Write your algorithm here
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (complement in seenNumbers) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}

/*Runtime: O(n^2)
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}
*/

/* 
  Write the Big O time complexity of your function here
   Runtime: O(n)
  space: 0(n)
*/

/* 
  Add your pseudocode here
   create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
