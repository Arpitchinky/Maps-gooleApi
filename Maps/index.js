console.log("welcome to javascript");

let name = 'Arpit';
console.log(name);

//Cannot be a reserved keyword
//Should be a meaningfull
//Cannot start with a number(1name)
//Cannot contain a space  or hyphen(-)
//Are case-sensetive

//Constaints

let intrestRate = 0.4;
intrestRate = 2;
console.log(intrestRate);

//permitive valuetype

let fname = 'Arpit';// String Literal

let age  = 22; //Number Literal

let isApproved = false; //Boolean Literal

let firstName = undefined;

let selectedColor = null;

//Reference type 
//Object , Array , Function 

let person = {
    name:'Abhisek',
    age: 22
};

// Dot Notation
person.name = "Chinky";

//Bracket Notation 
let selection  = 'name';
person[selection] = 'Kuldeep'
console.log(person.name);

//Arrays 
let selectedAnimals = ['Lion' , 'beer' , 'Elephent'];
selectedAnimals[2] = 1;
console.log(selectedAnimals.length);


//Functions

//Performing a task 

// function greet() {
//   console.log('Hello welcome to reat js')
// }
// greet();

function greet(name , lastname){
    console.log('Hello' + name + ' ' + lastname )
}
greet('Arpit','chaurasia');

//Calculate a value
function square (number){
    return number* number;

}
//Here is 2 function call 
console.log(square(2));