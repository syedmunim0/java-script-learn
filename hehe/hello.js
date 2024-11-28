const marvel = ['iron' , 'spider','hawk'];
const Dc = ['bat','super','flash'];

// marvel.push(Dc)
// console.log(marvel)
const allheroes = [...Dc,...marvel]
console.log(allheroes)

const newarr = [1,2,3,[4,5,6,[7,8,9]]]
const new1arr = newarr.flat(Infinity)
console.log(new1arr)

console.log(Array.isArray('Munim'))
console.log(Array.from('Munim'))

let score1 = 100
let score2 = "munim"
let score3 = 300
console.log(Array.of(score1,score2,score3))
console.log(score1 + score2 + score3)
const scoreall = score2.toString() + score1.toString() +score3.toString()
console.log( scoreall)