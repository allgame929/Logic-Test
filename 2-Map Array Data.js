
function productArray(arr, n) {
    if (n == 1){
        return;
    }

    var i, temp = 1;

    var prod = Array(n).fill(0);

    for (j = 0; j < n; j++)
        prod[j] = 1;
    
    for (i = 0; i < n; i++) {
        prod[i] = temp;
        temp *= arr[i];
    }

    temp = 1;

    for (i = n - 1; i >= 0; i--) {
        prod[i] *= temp;
        temp *= arr[i];
    }

    for (i = 0; i < n; i++)
        console.log(prod[i] + " ");

    return;
}

var arr = [ 16, 17, 4, 3, 5, 2];
var n = arr.length;
productArray(arr, n);

console.log(productArray(arr,n));