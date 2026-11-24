// function showmessage(){
//     console.log("my message is hiii!");
// }
// // in var ->  we can redeclare and reassign the variable for same variable name 
// // in let -> we can reassign the value but cannot redeclare the variable for same variable 

// var a = 10;

// var a = 20; // redeclaration is allowed
// console.log(a); // Output: 20


// let b = 30;
// b= 40; // reassignment is allowed
// console.log(b); // Output: 40

// const c = 50;
// // c = 60; // reassignment and redeclare is not allowed
// console.log(c); // Output: 50



// /*DATATYPES IN JAVASCRIPT

// PRIMITIVE DATATYPES: number, string, boolean, null, undefined, symbol, bigint
// non-primitive datatypes: object, array, functions

// **to find type of variable we can use (typeof) operator*

// */

// //1. number
// let p = 10;
// console.log(typeof p); // Output: number

// //2. string (" ") (' ') (`backticks`)
// let z = "Hello";
// let y = 'hi';
// let x = `hello`;
// console.log(typeof z); // Output: string
// console.log(typeof y); // Output: string
// console.log(typeof x); // Output: string

// //3. boolean (true/false)
// let isTrue = true;
// console.log(typeof isTrue); // Output: boolean

// //4. null
// let n = null;
// console.log(n); // Output: null

// let isvalid = null;
// let m= 20
// if(m>=18){
//     isvalid = true;
// }
// console.log(isvalid); // Output: true
// console.log(typeof n); // Output: object (this is a known quirk in JavaScript)

// //5. undefined
// let u;
// console.log(u); // Output: undefined
// console.log(typeof u); // Output: undefined

// //6. symbol
// let sym = Symbol('mySymbol');
// console.log(typeof sym); // Output: symbol

// //7.bigint
// let big = 1234567890123456789012345678901234567890n;
// console.log(typeof big); // Output: bigint


// //non-primitive datatypes
// //1. object
// let obj = {name: "John", 
//     age: 30,
//     address: {
//         city: "New York",
//         state: "NY"
//     },
//     contacts: ["123-456-7890", "987-654-3210"]
// };
// console.log(obj); // Output: {name: "John", age: 30}
// console.log(obj.address.city);
// console.log(typeof obj); // Output: object



//2. array
let arr = [1,2,3]; // similar to the in java  int[] arr = {1,2,3,4,5};
let age = new Array(5); // array of size 5 similar to the in jav  int[] arr = new int[5];


console.log(arr); // Output: [1, 2, 3]
//console.log(typeof arr); // Output: object


//insertion
console.log("insertion");
arr.push(4); // add 4 at the end of the array
arr.unshift(0); // add 0 at the beginning of the array
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}// to get the values form the array one by one 

//delete
console.log("deletion");
arr.pop(); // remove last element
arr.shift(); // remove first element
console.log(arr);



//includes - search for an element in the array
console.log("includes");
console.log(arr.includes(2)); // Output: true



// indexof - returns the index of the element in the array
// if 2 vauls are same it return the first values index
console.log("indexof");
console.log(arr.indexOf(2)); // Output: 1



//slice - returns a portion of the **without affecting the old array**
console.log("slice");
const arrcopy = arr.slice(1,3); // returns a new array from index 1 to 2 (3 is excluded)
console.log(arrcopy); // Output: [2, 3]



// //splice - returns a portion of the **and affecting the old array**
// console.log("splice");
// const arrcopy2 = arr.splice(1,2); // returns a new array from index 1 to 2 (2 is excluded) 
// // and removes the elements from the old array
// console.log(arrcopy2);


//3. functions
function myname(){
    console.log("good afternoon");
}
myname(); 
myname(); 
myname();


function add(a,b){
    return a+b;
}

let a = add(10,20);
console.log(a); 

function greeting(name){
    console.log("hello "+name)
}

greeting("Gowshi");
greeting("Gayathri");
greeting("dhanushree");
greeting("asma");



//arrow function
const multiply = (x,y) => { 
    return x*y;
}

console.log(multiply(10,20)); // Output: 200

const greet =(mname) =>{
    console.log("hello "+mname);
}
greet("Gowshi");
greeting("dhanushree");
greeting("asma");

//callback function

console.log("callback function: ");

function hii(name,functionname){
    console.log("Hello, " + name);
    functionname(); // getting the paratmeter as a functtion name or function and calling
    //  a function inside a another function
}

function bye(){
    console.log("Goodbye!");
}

hii("Gowshi", bye); // Output: Hello, Gowshi


//synchronous 
console.log("task 1");
console.log("task 2");
console.log("task 3");

//asynchronous functions
console.log("asynchronous functions: ");

console.log("task 1");

setTimeout(() => {
    console.log("task 2");
},3000); // 3 seconds delay

console.log("task 3");