// made 2/8/24
// by francis igoe
// prints wether a number is or odd or even for 0-15 using a for loop
const n = 15
for (let i = 0; i <= n; i++){
    if ((i % 2) == 0){
        console.log(i + " is even")
    }
    else{
        console.log(i + " is odd")
    }
}