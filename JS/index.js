
// To check intersection of array.
function max1sCount(arr) {
    let count = 0, maxCount = 0, resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count = count + 1;
            if (count > maxCount) {
                maxCount = count
            }
        } else {
            count = 0;
        }
    }

    return maxCount;
}

// Example usage
const myArray = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];



console.log("Maximum 1's count",max1sCount(myArray));
