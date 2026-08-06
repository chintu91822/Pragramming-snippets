// Program to find the factorial of a number

let num = 5;
let fact = 1;

if (num < 0) {
    console.log("Factorial does not exist for negative numbers.");
} else {
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("Factorial of " + num + " is " + fact);
}
