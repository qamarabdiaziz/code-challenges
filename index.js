//finding the user students' marks
//getting grades of student
let marks = prompt("Please enter the student's marks (between 0 and 100):");
marks = parseInt(marks);

if (marks > 79) {
  console.log("The student's grade is: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("The student's grade is: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("The student's grade is: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("The student's grade is: D");
} else {
  console.log("The student's grade is: E");
}
//finding DemeritPoints
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }
//call the demeritpoint
  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  console.log(`Points: ${demeritPoints}`);

  if (demeritPoints >= 12) {
    console.log("License suspended");
  }
}
// Define tax and deduction rates
const taxRates = [
  [5999, 0.025],
  [7999, 0.03],
  [11999, 0.04],
  [14999, 0.05],
  [19999, 0.06],
  [24999, 0.075],
  [29999, 0.09],
  [34999, 0.1],
  [39999, 0.11],
  [44999, 0.12],
  [49999, 0.13],
  [59999, 0.14],
  [69999, 0.15],
  [79999, 0.16],
  [89999, 0.17],
  [99999, 0.18],
  [Infinity, 0.19]
];

const nhifDeductions = [
  [0, 0],
  [5999, 150],
  [7999, 300],
  [11999, 400],
  [14999, 500],
  [19999, 600],
  [24999, 750],
  [29999, 850],
  [34999, 900],
  [39999, 950],
  [Infinity, 1000]
];

const nssfDeductionRate = 0.06;

// Get input from user
const basicSalary = parseInt(prompt("Enter basic salary: "));
const benefits = parseInt(prompt("Enter benefits: "));

// Calculate gross pay
const grossPay = basicSalary + benefits;

// Calculate payee (tax)
let tax = 0;
for (let i = 0; i < taxRates.length; i++) {
  if (grossPay <= taxRates[i][0]) {
    tax = grossPay * taxRates[i][1];
    break;
  }
}

// Calculate NHIF deduction
let nhifDeduction = 0;
for (let i = 0; i < nhifDeductions.length; i++) {
  if (grossPay <= nhifDeductions[i][0]) {
    nhifDeduction = nhifDeductions[i][1];
    break;
  }
}

// Calculate NSSF deduction
const nssfDeduction = grossPay * nssfDeductionRate;

// Calculate total deductions
const totalDeductions = tax + nhifDeduction + nssfDeduction;

// Calculate net pay
const netPay = grossPay - totalDeductions;

// Output results to console
console.log(`Gross Pay: ${grossPay}`);
console.log(`Payee (Tax): ${tax}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Pay: ${netPay}`);