let input = [2, 4, 7, 11, 15, 16];
let even = [,]
let odd = [,]

function evenOdd(){
    for (i = 0; i < input.length; i++){
        if (input[i] % 2==0){
            even[i] = input[i]
        } else {
            odd[i] = input[i]
        }
    }
    console.log(even)
    console.log(odd)
}

evenOdd()