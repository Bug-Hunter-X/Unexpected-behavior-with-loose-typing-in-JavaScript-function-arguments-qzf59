function foo(a, b) {
  // Check if arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Invalid input: Arguments must be numbers');
    return null; // Or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1)); // Invalid input: Arguments must be numbers, null
console.log(foo(1, "2")); // Invalid input: Arguments must be numbers, null