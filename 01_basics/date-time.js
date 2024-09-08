//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreateDate =new Date(2023,0,23)
let myCreateDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

//console.log(Math.floor(Date.now()));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

console.log(newDate.getDay());


newDate.toLocaleDateString('default',{
    weekday: "long"
})