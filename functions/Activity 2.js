// made 5/8/24
// by francis igoe
// finds the factorial of a number
function factorial(val){
    let count = 1
    let factor = 1
    while(count <= val){
            factor *= count
            count ++
    }
    return factor
}

console.log(factorial(6))