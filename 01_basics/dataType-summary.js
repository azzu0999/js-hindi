//primitive

// 7 type : String, Number , Boolean , null , undefined , Symbol, BigInt

const isLoggedIn = false;
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 343553362358686599n



// Reference (Non primitive)

// Array, Objects, Functions 

const heros =["shaktiman","naagraj","doga"];
let myObj = {
    name: "ajay",
    age: 21,
}

const myFunction =function(){
    console.log("hello world");
    
}
console.log(typeof myFunction);

//DataType  == typeof

//undefined == undefined
//   null   == null
//Symbol    == Symbol
//Number    == Number
//string    == String
//Function  == Function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (copy)Stack (primitive) ,(Reference) Heap (Non- primitive)

let myYoutubename = "yo yo honey singh"
let anothername = myYoutubename
anothername = "namoh studio"
// console.log(myYoutubename);
// console.log(anothername);


let userone = {
    email: "user@google.com",
    upi: "xyz@ybl"
}

let usertwo = userone;

usertwo.email= "ajay@google.com"
console.log(userone.email);
console.log(usertwo.email);



