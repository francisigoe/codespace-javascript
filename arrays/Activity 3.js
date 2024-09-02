// made 2/8/24
// by francis igoe
// checks if values are higher or lower than pevious highest or lowest values in an array and changes max or min if they are
const list = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
min = list[0]
max = list[0]
for (let i = 1; i < list.length; i++){
    if (list[i] < min){
        min = list[i]
    }
    else if (list[i] > max){
        max = list[i]
    }
}
console.log("Original Array: ", list)
console.log("Maximum value for the above array =  ", max)
console.log("Minimum value for the above array =  ", min)