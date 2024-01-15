function threeSum(arr, target) {
// write your code here
	 arr.sort((a, b) => a - b);

    // Initialize variables to store the closest sum
    let closestSum = Number.MAX_SAFE_INTEGER;

    // Iterate through the array
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right =arr.length - 1;

        while (left < right) {
            // Calculate the current sum
            const currentSum = arr[i] +arr[left] + arr[right];

            // Check if the current sum is closer to the target
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            // Adjust pointers based on the comparison with the target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
  
}

module.exports = threeSum;
