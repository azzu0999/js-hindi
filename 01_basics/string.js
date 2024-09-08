const name = "ajay"
const repoCount = 50
 
//console.log(name + repoCount +"value");
console.log(`my name is ${name}`);

const gameName =new String('ajay-Ak-47')


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherstring = gameName.slice(-8,2)
console.log(anotherstring);

const newStringOne = "    ajay     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://hitesh.com/hitesh%20youtube"
console.log(url.replace('%20','-'));
console.log(gameName.split('-'));
