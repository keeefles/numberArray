
// define the array
function getMiddle(array) {

// array.length represents the number of elements
// >> basically says move to the right.
    const mid = array.length >> 1;

// '?' shortens the if or else statement.
    return array.length & 1 ? array[mid]

// says to display the thing basically...
// slice is used to returns elements as a new array. 
        : array.slice(mid - 1, mid + 1);
    }

// display the answer in the console.
    console.log(getMiddle([12, 18, 11, 5, 8, 2]));
