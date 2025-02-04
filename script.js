const inputNumber = document.getElementById("input");
const check = document.querySelector("#checkButton");
const output = document.getElementById("output");
function primeNumberChecker(numberInput) {
  for (let i = 2; i < numberInput; i++) {
    if (numberInput % i === 0) {
      output.innerText = `${numberInput} divided by ${i} so ${numberInput} not prime number.`;
      return;
    }
    if (i === numberInput - 1)
      output.innerText = `${numberInput} is prime number.`;
  }
}
function checkBtn() {
  const numberInput = Number(inputNumber.value);
  primeNumberChecker(numberInput);
}
check.onclick = checkBtn;

// const inputNumber = document.getElementById("input");
// const check = document.querySelector("#checkButton");
// const output = document.getElementById("output");

// function primeNumberChecker(numberInput) {
//   if (numberInput < 2) {
//     output.innerText = `${numberInput} is not a prime number.`;
//     return;
//   }
//   for (let i = 2; i < numberInput; i++) {
//     if (numberInput % i === 0) {
//       output.innerText = `${numberInput} divided by ${i} so ${numberInput} is not a prime number.`;
//       return;
//     }
//   }
//   output.innerText = `${numberInput} is a prime number.`;
// }

// function checkBtn() {
//   const numberInput = Number(inputNumber.value);
//   if (isNaN(numberInput)) {
//     output.innerText = "Please enter a valid number.";
//     return;
//   }
//   primeNumberChecker(numberInput);
// }

// check.onclick = checkBtn;
