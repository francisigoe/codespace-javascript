// made 31/8/24
// by francis igoe
// gets 3 numbers from user and says weather they are equal, diferrent or neither
let num1 = prompt("Input the first number:")
let num2 = prompt("Input the second number:")
let num3 = prompt("Input the third number:")
if(num1 == num2 & num2 == num3 & num1 == num3)
    {
    console.log("All numbers are equal")
    }
else if(num1 != num2 & num2 != num3 & num1 != num3)
    {
    console.log("All numbers are different")
    }
else
    {
    console.log("Neither all are equal or different")
    }