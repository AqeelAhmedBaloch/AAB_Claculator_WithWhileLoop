
// import inquirer IB Coding Schools
import inquirer from "inquirer";

let loop = true;

while (loop){

    const userInput = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: "Enter First Number : ",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter Second Number: ",
  },
  {
    type: "list",
    name: "oprator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    message: "Select the Operator",
  },
]);

const num1 = userInput.num1;
const num2 = userInput.num2;
const oprator = userInput.oprator;

// console.log(num1 , num2, oprator);
// now we use some conditions here

if (num1 && num2) {
  // it means if num1 and num2 has some digits.
  if (oprator == "Addition") {
    console.log(`\nThe answer of ${num1} + ${num2} = ${num1 + num2}`);
  } else if (oprator === "Subtraction") {
    console.log(`\nThe answer of ${num1} - ${num2} = ${num1 - num2}`);
  } else if (oprator === "Multiplication") {
    console.log(`\nThe answer of ${num1} * ${num2} = ${num1 * num2}`);
  } else if (oprator === "Division") {
    console.log(`\nThe answer of ${num1} / ${num2} = ${num1 / num2}`);
  }
} else {
  console.log(`Please Enter a Valid Number`);
}
const calculateMore = await inquirer.prompt({
    type:"confirm",
    name:"more",
    message:"Do you want more calculations ?",
    default: false,
});
if(!calculateMore.more){
    loop = false;
    console.log(`\nThank you using my Calculator`);
}};

// for some advance features watch the video. 
