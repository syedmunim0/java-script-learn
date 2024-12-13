const user = {
    username: "Syed",
    price: 100,

welcomemessage: function() {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    
}

}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()
// console.log(this);//ye ek empty string dega

// function tea() {
//     console.log(this)
// }
// tea()


//() => //this is an arrow function

// const chai =  () => {
//     let  username = "munim"
//     console.log(this);
    
// }
// chai()

const addTwo = (num1,num2) => { //curly braces mai return keyword dena padta hai
    return num1 + num2

}

const addtwo = (num1 , num2) => num1 + num2//isme return keyword nhi likhan padta



