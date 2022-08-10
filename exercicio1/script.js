const num = +prompt("Indique um numero!")
if(num % 2 === 0) {
    console.log(num, "divisivel por 2")
    if(num % 3 === 0){
console.log(" O numero ", num, "é divisivel 3.");
    }
}else if(num % 2 === 0 && num % 3){
    console.log(num? "divisivel por 2 e 3" : "não é divisivel por 2 e 3");
   
}else if(!num % 2 === 0){
    console.log(num, "não é divisivel por 2");

}else if(!num % 3 === 0){
    console.log(num, "nao é divisivel por 3")
}


// const num1 = +prompt( "indique um numero!")
// if(num1 % 2 === 0 || num1 % 3 === 0) {
   
//     console.log( "o número é divisível por 2 ou 3.")
// }else
// console.log(num1 % 2 === 0 || num1 % 3 === 0? "é divisível por 2  3" : "não é divisível por 2 e 3.")
