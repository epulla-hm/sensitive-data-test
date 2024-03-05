// fibonacci function

let fibonacci = function(n) {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Results:");
for (let i = 0; i < 15; i++) {
    console.log(fibonacci(i));
}

