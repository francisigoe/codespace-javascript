// made 2/8/24
// by francis igoe
// prints the times table up to 10 for user inputed number, using a for loop
const n = 10
let number = prompt("Input a number: ")
for (let i = 1; i <= n; i++){
    console.log(i," x ", number," = ", i * number)
}