// singleton

// object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "ajay",
    age: 18,
    "full name": "Ajay Kumar Kahar",
    [mySym]: "mykey1",
    location: "jabalpur",
    email: "ajay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "ajay@ggits.net"
//Object.freeze(JsUser)
JsUser.email = "ajay20@ggits.net"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
