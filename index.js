function foo(n) {
    if (n <= 1) {
        return 1;  // Base case: factorial(1) = 1
    } else {
        return n * foo(n - 1);  // Recursive call
    }
}

console.log(foo(5)); // Output: 120
