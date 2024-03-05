let fibonacci = (n) => {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// python: [fibonacci_of(n) for n in range(15)]
for (let n = 0; n < 15; n++) {
  console.log(fibonacci(n));
}

