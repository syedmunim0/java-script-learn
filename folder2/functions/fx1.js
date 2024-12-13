// function myname(){
// console.log("M");
// console.log("U");
// console.log("N");
// console.log("I");
// console.log("M");}

// myname()

// function add2numbers(number1,number2){
//     console.log(number1 + number2)
// }

function addtwonumbers(number1,number2){
    return number1 + number2
}

const result = addtwonumbers(3 , 5)
// console.log("result:",result);

// console.log(typeof result);

function loginusermessage(username = "sam"){
    if(!username){
    console.log("Please Enter a Username");
    return
    }
 

return `${username} justlogged in`}

console.log(loginusermessage("jo bhi user hoga"));




