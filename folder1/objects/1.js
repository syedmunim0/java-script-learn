const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
const obj3 = {...obj1, ...obj2} //this command used to add objects as well as arraays

// console.log(obj3);


const tinderuser = {
    email: "hello@mail.com",
    fullname:{
        firstname: "Syed",
        lastname: "Munim"
    },
    adress: "hello,hello"
}
 
// console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('fullname'))

