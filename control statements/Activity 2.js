// made 31/8/24
// by francis igoe
// gets 3 numbers from user and says weather they are in assending, desending or no order
let num1 = prompt("Input the first number:")
let num2 = prompt("Input the second number:")
let num3 = prompt("Input the third number:")
if(num1 < num2 & num2 < num3)
    {
    console.log("increaseing order")
    }
else if(num1 > num2 & num2 > num3)
    {
    console.log("decreaseing order")
    }
else
    {
    console.log("neither increasing or decreasing order")
    }