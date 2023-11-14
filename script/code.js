

function getMiddle(array) {
    const mid = array.length >> 1;
    return array.length & 1 ? array[mid]
        : array.slice(mid - 1, mid + 1);
    }
    console.log(getMiddle([12, 18, 11, 5, 8, 2]));
