// made 2/8/24
// by francis igoe
// adds all values in an array together using a for loop
let total = 0
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < list.length; i++){
    total += list[i]
}
console.log("The sum is ",total)