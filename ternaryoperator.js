// Basic JavaScript: Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The syntax is:

// condition ? statement-if-true : statement-if-false;
// The following function uses an if-else statement to check a condition:

// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// This can be re-written using the conditional operator:

// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater";
// }

function checkEqual(a, b) {
  return (a = b ? "Not Equal" : "Equal");
}

checkEqual(1, 2);
