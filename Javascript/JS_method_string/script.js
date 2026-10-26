
/* 1. Student Information Formatter */

let studentName = "   rAhUl shArMa   ";

let name = studentName.trim().toUpperCase();
let firstName = name.slice(0, name.indexOf(" "));
let lastChar = name.at(-1);

let email = "rahul123@gmail.com";

let message = "I am learning HTML and HTML is easy.";
message = message.replaceAll("HTML", "JavaScript");

let greeting = "Hello, ".concat(name);

let subjects = "HTML, CSS, JavaScript, Maths";
let subjectList = subjects.split(",");

document.getElementById("info").innerHTML = `
    <p>Formatted Name: ${name}</p>
    <p>First Name: ${firstName}</p>
    <p>Last Character: ${lastChar}</p>
    <p>Email Contains @: ${email.includes("@")}</p>
    <p>Email Ends With .com: ${email.endsWith(".com")}</p>
    <p>Updated Message: ${message}</p>
    <p>Greeting: ${greeting}</p>
    <p>Subjects: ${subjectList.map(s => s.trim()).join(", ")}</p>
`;


/* 2. Student Marks and Fee Report */

let marksText = "87";
let feeText = "25500.75";

let marks = Number.parseInt(marksText);
let fee = Number.parseFloat(feeText);

document.getElementById("marks").innerHTML = `
    <p>Student Marks: ${marks}</p>
    <p>Student Fee: ${fee}</p>
    <p>Is Integer: ${Number.isInteger(marks)}</p>
    <p>Is Finite: ${Number.isFinite(fee)}</p>
    <p>Is Safe Integer: ${Number.isSafeInteger(marks)}</p>
    <p>Fee with Two Decimals: ${fee.toFixed(2)}</p>
    <p>Indian Fee Format: ${fee.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    })}</p>
    <p>Marks Precision: ${marks.toPrecision(4)}</p>
    <p>Marks Exponential: ${marks.toExponential()}</p>
    <p>Marks as String: ${marks.toString()}</p>
    <p>Data Type: ${typeof marks.toString()}</p>
`;


/* 3. Marks Analysis and Geometry Calculator */

let studentMarks = [78, 85, 92, 67, 88];

let num = 12.7;
let radius = 5;
let value = -15;

let area = Math.PI * radius * radius;
let hypotenuse = Math.hypot(3, 4);

document.getElementById("math").innerHTML = `
    <p>Student Marks: ${studentMarks.join(", ")}</p>
    <p>Highest Marks: ${Math.max(...studentMarks)}</p>
    <p>Lowest Marks: ${Math.min(...studentMarks)}</p>

    <p>Round: ${Math.round(num)}</p>
    <p>Floor: ${Math.floor(num)}</p>
    <p>Ceil: ${Math.ceil(num)}</p>
    <p>Trunc: ${Math.trunc(num)}</p>

    <p>Circle Area: ${area.toFixed(2)}</p>
    <p>Triangle Hypotenuse: ${hypotenuse}</p>

    <p>Absolute Value: ${Math.abs(value)}</p>
    <p>Sign: ${Math.sign(value)}</p>

    <p>Power (2^3): ${Math.pow(2, 3)}</p>
    <p>Square Root of 64: ${Math.sqrt(64)}</p>
    <p>Cube Root of 27: ${Math.cbrt(27)}</p>
`;


/* 4. Random Number Playground */

function generateRandom() {
    let decimal1 = Math.random();

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 31) + 20;
    let num3 = Math.floor(Math.random() * 10) + 5;
    let decimal2 = Math.random() * 10 + 10;

    document.getElementById("random").innerHTML = `
        <p>Random Decimal (0 to 1): ${decimal1}</p>
        <p>Random Integer (1 to 10): ${num1}</p>
        <p>Random Integer (20 to 50): ${num2}</p>
        <p>Random Integer (5 to 14): ${num3}</p>
        <p>Random Decimal (10 to 20): ${decimal2}</p>
    `;
}

generateRandom();


/* 5. Student Assignment Deadline Manager */

let deadline = new Date(2026, 10, 20, 14, 30);

let reminder = new Date(deadline);
reminder.setDate(reminder.getDate() - 7);

// Deadline update
deadline.setDate(25);
deadline.setMonth(10);
deadline.setFullYear(2026);

document.getElementById("assignment").innerHTML = `
    <p>Updated Deadline: ${deadline.toDateString()}</p>
    <p>Year: ${deadline.getFullYear()}</p>
    <p>Month: ${deadline.getMonth() + 1}</p>
    <p>Day: ${deadline.getDate()}</p>
    <p>Weekday: ${deadline.getDay()}</p>
    <p>Hours: ${deadline.getHours()}</p>
    <p>Minutes: ${deadline.getMinutes()}</p>
    <p>Indian Date: ${deadline.toLocaleDateString("en-IN")}</p>
    <p>Reminder Date: ${reminder.toDateString()}</p>
    <p>ISO Date: ${deadline.toISOString()}</p>
`;


/* 6. Student Exam Schedule Manager */

let currentDate = new Date();
let examDate = new Date(2026, 11, 15, 10, 0);

let copiedDate = new Date(examDate);
copiedDate.setDate(20);

let originalDate = examDate.toDateString();

copiedDate.setFullYear(2027);
copiedDate.setHours(12, 30, 0);

let examReminder = new Date(examDate);
examReminder.setDate(examReminder.getDate() - 7);

let parsedDate = Date.parse("2026-12-15");

function checkDate(date) {
    return date instanceof Date && !Number.isNaN(date.getTime());
}

let validDate = new Date("2026-12-15");
let invalidDate = new Date("wrong-date");

document.getElementById("exam").innerHTML = `
    <p>Current Date: ${currentDate}</p>
    <p>Current Timestamp: ${Date.now()}</p>

    <p>Exam Year: ${examDate.getFullYear()}</p>
    <p>Exam Month: ${examDate.getMonth() + 1}</p>
    <p>Exam Day: ${examDate.getDate()}</p>
    <p>Exam Weekday: ${examDate.getDay()}</p>

    <p>Original Exam Date: ${originalDate}</p>
    <p>Changed Copy Date: ${copiedDate}</p>

    <p>Reminder Date: ${examReminder.toDateString()}</p>
    <p>Readable Date: ${examDate.toDateString()}</p>
    <p>Indian Date: ${examDate.toLocaleDateString("en-IN")}</p>
    <p>ISO Date: ${examDate.toISOString()}</p>

    <p>Parsed Timestamp: ${parsedDate}</p>
    <p>Valid Date: ${checkDate(validDate)}</p>
    <p>Invalid Date: ${checkDate(invalidDate)}</p>
`;
