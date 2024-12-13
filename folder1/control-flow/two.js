const useremail = ['t',]

if (Object.keys(useremail).length === 0) {
    console.log('email nahi hai ');
} else {
    console.log('emailhai');

}

//Nullish coalescing operator - (??)  - [checks safety of null]
let val1;
val1 = undefined ?? 10

console.log(val1);


//terinary operator

//condition ? true : false 

const teaprice = 100
teaprice <= 80 ? console.log("less than 80") : console.log('more than 80')



