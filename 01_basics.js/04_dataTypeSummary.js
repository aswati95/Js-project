//  Primitive (Call by Value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100        //number
const scoreValue = 100.3   //number

const isLoggedIn = false     /boolean
const outsideTemp = null      //object
let userEmail;                //undefined

const id = Symbol('123')               //symbol
const anotherId = Symbol('123')       //symbol

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n  (datatype = undefined)



// Call By Reference (Non primitive)

// Array, Objects, Functions (datatype = object , for function = function object)

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}                                                     //object

const myFunction = function(){
    console.log("Hello world");
}                                                     //function object

console.log(typeof anotherId);                       

// https://262.ecma-international.org/5.1/#sec-11.4.3
