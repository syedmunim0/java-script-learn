//literals
const mySym = Symbol('key1');

const jsuser = {
    name : "Munim",
    age: 12,
    [mySym] : "mykey1",
    location: "kashmir",
    email : "syed@google.com",
    isloggedin: false,
    lastlogin: 'monday'
}
console.log(jsuser["isloggedin"])
console.log(jsuser[mySym])

