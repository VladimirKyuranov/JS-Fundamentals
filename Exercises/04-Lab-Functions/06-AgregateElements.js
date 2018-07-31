function solve(arr) {
    let add = (a, b) => a + b;
    let addInversed = (a, b) => a + 1 / b;

    console.log(agregate(arr, 0, add));
    console.log(agregate(arr, 0, addInversed));
    console.log(agregate(arr, "", add));

    function agregate(array, initialValue, func){
        for (let i = 0; i < array.length; i++) {
            initialValue = func(initialValue, array[i]);
        }

        return initialValue;
    }
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);