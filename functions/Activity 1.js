// made 5/8/24
// by francis igoe
// prints the array to console
const list = [10, 2, 3, 4, 7];
function array_content(list){
    console.log("Original Array: ", list)
}
// checks if value is higher than pevious highest value in an array and updates max if it is for each index of the array
function array_max(list){
    max = list[0]
    for (let i = 1; i < list.length; i++){
        if (list[i] > max){
            max = list[i]
        }
    }
    console.log("Maximum value for the above array =  ", max)
}

array_content(list)
array_max(list)