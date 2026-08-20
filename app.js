// ==========================================
// ACTIVITY 1: Testing Node.js Setup
// ==========================================
console.log("Node.js environment is active and running perfectly!");


// ==========================================
// ACTIVITY 2: Working with Variables & Math
// ==========================================
// Screenshot ke mutabiq direct arithmetic operations aur variables create karna
let a = 10;
let b = 5;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

console.log("\n--- Mathematics Operations (Activity 2) ---");
console.log("Value of a = " + a + ", b = " + b);
console.log("Addition (a + b): " + addition);
console.log("Subtraction (a - b): " + subtraction);
console.log("Multiplication (a * b): " + multiplication);
console.log("Division (a / b): " + division);


// ==========================================
// ACTIVITY 3: Basic Strings & Output Display
// ==========================================
// Text ko uppercase aur lowercase mein badalna aur string concatenate karna
let greetingText = "hello world from nodejs";
let formattedGreeting = greetingText.toUpperCase();

console.log("\n--- String Operations (Activity 3) ---");
console.log("Original Text: " + greetingText);
console.log("In Uppercase: " + formattedGreeting);


// ==========================================
// ACTIVITY 4: Core Functions & Execution
// ==========================================
// Ek dynamic logic function jo user input ke hisab se output create karta hai
function checkNumberType(number) {
    if (number % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log("\n--- Function Logic Testing (Activity 4) ---");
console.log("The number 14 is: " + checkNumberType(14));
console.log("The number 7 is: " + checkNumberType(7));
console.log("==========================================");
