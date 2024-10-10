function every(arr, test) {
    for (var i = 0; i < arr.length; i++) {
        if (!test(arr[i])) return false;
    }
    return true;
}

function some(arr, test) {
    for (var i = 0; i < arr.length; i++) {
        if (test(arr[i])) return true;
    }
    return false;
}

function none(arr, test) {
    return !some(arr, test);
}
