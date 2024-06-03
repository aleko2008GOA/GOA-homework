invert([1,2,3,4,5]);

function invert(arr){
    arr.forEach(function(value, index){
        arr[index] = -arr[index];
    });
}