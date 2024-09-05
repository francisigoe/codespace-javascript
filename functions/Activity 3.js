// made 5/8/24
// by francis igoe
// checks if a number is prime or not
function check_prime(val){
    for(let i = 2; i < val; i++){
        if(val % i == 0){
        console.log("number is not prime")
            break
        }
    console.log("number is prime")
    }
}

check_prime(7)