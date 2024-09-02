// made 2/8/24
// by francis igoe
// finds the average value of an array by adding them together and deviding by the array length
let total = 0
const list = [20, 30, 25, 35, -16, 60, -100];
for (let i = 0; i < list.length; i++){
    total += list[i]
}
console.log("Average value of the array elements is : ",total / list.length)