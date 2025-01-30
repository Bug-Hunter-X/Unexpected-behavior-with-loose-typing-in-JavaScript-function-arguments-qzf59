# Unexpected behavior with loose typing in JavaScript function arguments
This repository demonstrates a common JavaScript pitfall involving loose typing and function arguments. The `foo` function is designed to add two numbers. However, due to JavaScript's dynamic typing, the function's behavior is unpredictable when the number of arguments or types of arguments are inconsistent.
## Bug
The `bug.js` file contains a function `foo` that adds two numbers. When called with the expected number of arguments, it works as expected. However, when called with an unexpected number of arguments or with arguments of an unexpected type, it produces unexpected results (NaN or string concatenation).
## Solution
The `bugSolution.js` file demonstrates solutions to mitigate this issue:
1. **Type checking:** Explicitly check the types of arguments using `typeof` and handle unexpected types appropriately.
2. **Default parameters:** Provide default values for missing arguments to ensure that the function always receives the expected number of arguments.
3. **Input validation:** Validate the arguments at the start of the function and throw an error or return a meaningful value if validation fails.
By implementing these techniques, we can improve the robustness and predictability of our JavaScript functions.