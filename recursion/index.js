function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(3)); 

function countDown(num) {
    if (num <= 0) {
        console.log('all done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(50);

function productOfArray(arr) {
    if (!Array.isArray(arr)) return undefined;
    
    if (!arr.length) return 1;
    
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num){
   if (isNaN(num)) return undefined;
   
   if (num === 0) return 0;
   
   return num + recursiveRange(num - 1);
}

function fib(num) {
    if (n <= 2) return 1;

    return fib(n - 1) + fib(n - 2);
}