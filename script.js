// Script.js because we only have 1 script JavaScript file
// sometimes we call it main.js if there's more thaan one but everything is being imported in this guy


/* This is a 
multi-line
comment
*/ 


/* 
    Reasons for console.log
    error handling
    for API calls to see the data so we can traverse
    to see if the behavior in our code is what we expect
    developing the code, not so much production
*/

console.log('Hello, world!'); //console.log to JS is print to python

let myName = 'Alex';

// Template Literals (akin to F strings in Python)
// utilize ` backticks and ${} to interject variables.
console.log(`My name is ${myName}. Nice to meet you`);

// Semi-colons are considered syntactical sugar aka used for readability
// in JS indentation does not matter
// JS uses {} to determine scope blocking. Similar to : and indentation in Python
// use the ; to determine end of a scope block
// they also have a functioning use when it comes to adding multiple lines of code on 1 line
// line 1 of code ; line 2 of code



/* VARIABLES
    Both Python & JS determine variables dynamically (vs statically) aka at run-time. 
    interpreter doesn't know data type until your code is run.
    Allows your code to be VERY flexible. 
    However, in JS we need to use variable declaration statements
    var, let, const
*/

// var used to be only declaration statement. generally avoided today
// var doesn't have scope blocking aka can create & change variable from ANY scope
// subject to variable hoisting, aka pushed to the top of scope EVEN if variable is undefined.

// in JS we can declare variables without assignment (arming our variables)

//Declare Variables
// will see the use of var in old code (legacy/monolithic code)
console.log(myVar);
// because of variable hoisting, this moves to the top of the scope
var myVar; 
var myVarChanged = myVar + ' Kim';
console.log(myVarChanged);
// var allows you to use the variable before its assigned.
myVar = 'Spencer'; 
console.log(myVar); 

function myFunc() {
    console.log(myVar);
}

myFunc(); 
console.log(myVar);


//let & const
// const should be default (we cannot redeclare nor reassign const)
const myConstantVar = 'Victor';
// const myConstantVar = 'Kayla'; //Error
// myConstantVar = 'Karen'; //Error in the console

//however if we KNOW we may need to reassignn our variable use let
let myNewVar = 'Brad';
// let myNewVar = 'Maurq'; //Error
myNewVar = 'Maurq'; //No error because we can reassign

// in JS we use camelCase 
// examples of when we would use let vs const (these variables are changing)
let listInc = 0
listInc += 1

let myList = ['Karen', 'Kayla', 'Victor']
myList.push('Maurq')

// let dooesn't allow variable hoisting aka using a variable before its declaration & assignment 
// console.log(myLet);
// because of variable hoisting, this moves to the top of the scope
let myLet; 
let myLetChanged = myLet + ' Kim';
console.log(myLetChanged);


/* DATA TYPES
    Primative
        -strings
        -numbers
        -booleans
        -undefiend
        -null
        -symbol
    
    Reference/Object
        -Objects aka Dictionaries in Python
        -Arrays aka lists in Python
        -Functions
*/

let myString = 'Hello';
let myNumDec = 5.5; //number type
let myNumWhole = 5; //number type
let myBool = true;
let myNull = null; 
let myObj = { name: 'Chris', profession: 'Software Engineer'};
let myArr = [1, 5, 'Andy', true ]; //any length and any data type

function myFuncAgain(){
    console.log("I am a function which is a reference/object type")
}

myFuncAgain();

// built-in function typeof that will allow us to understand the type of our data
// type-guarding. aka do somethign to the data if its THIS type vs do something else to the data if its THIS type
console.log(typeof myNumDec) //typeof is akin to type in Python. typeof will be EXTREMELY helpful when we consume APIs.
console.log(typeof myNumWhole)


// we will be getting to more of this tomorrow. learning about objects
let myData = {
    name: 'Alex',
    hobbies: ['biking', 'hiking', 'camping'],
    age: 32
}


// OPERATORS

// Arithmetic Operators
const x = 5;
const y = 3;
const sum = x + y;
const diff = x - y;
const product = x * y;
const quot = x / y; //there is no // in JS. Instead we use Math.floor()
console.log(quot);
console.log(Math.floor(quot)) //this is how we floor divide
const remainder = x % y;
console.log(remainder)

//Assignment Operators
myNonDeclare = 5; //let is the default but PLEASE always use a declare statement
myNonDeclare = 6;
console.log(myNonDeclare); 
let myNum = 10;
myNum += 5;
myNum -= 3;
myNum *= 2;
myNum /= 6; // answer is 4

console.log(myNum);


//Comparison Operators

// 2 differennt types of comparison
// regular comparsison but also STRICT comparison check. 
// regular compares values but JS likes to assume things

const myVal = 5
const myStringVal = "5"

console.log(myVal == myStringVal); //this just checks the value but JS assumes it can change the data type
console.log(myVal === myStringVal); //strict ALSO checks the type
console.log(myVal !== myStringVal); 


// Logical Operators
// && is akin to "and" in Python
// || is akin to "or" in Python

let myOtherNum = 5;

/*Truth Tree
    T && T == T
    T && F == F
    T || F == T
    F && F == F
    F || F == F
*/

console.log(myNum < myOtherNum && myVal === myStringVal); //false
console.log(myNum < myOtherNum || myVal === myStringVal); //true


// typeof is akin to type in Python
console.log(typeof myArr); //string, number, boolean, object(object, arrays)

// myData['age'] = 33;
// console.log(myData);




// ARRAYS 

let ingredients = ['eggs', 'butter', 'flour']
ingredients.push('milk') //push is akin to append in Pythonn
console.log(ingredients)


// ingredients.pop() //takes no parameters. AlWAYS the last item
console.log(ingredients)

//splice allows us to remove from any index
// splice allows us to replace our list at a certain index with another value, 
// if no value is given it simply removes
// splice takes in 3 arguments (the start, how many to replace, and what to replace with)
// ingredients.splice(0, 1);
// ingredients.splice(2, 1);
// ingredients.pop(); // same as above IF the index is Indeed at the end of the list
console.log(ingredients);


//slice is same functionality as slice in Python
// in Python we had [::] = [start: stop: step]
// in JS we have .slice(s,s,s)
let ingredientSlice = ingredients.slice(1,-1); //slice end is NON inclusive. Can use positive OR negative indexes
console.log(ingredientSlice);



// MAP, FILTER, REDUCE
function addOne(num) {
    console.log(num)
    return num + 1
}; 

let myNums = [5, 7, 11, 25, -3];
// map allows us to run a function over every item in an array
// map takes in 1 aargument which is the function to run over all items
// map traverses array and calls upon the specified function passing in the array item as arguments
const myMapNums = myNums.map(addOne);

// the above is similar this 
let myIterNums = [];

for (let num of myNums) {
    myIterNums.push(num + 1)
};

console.log(myMapNums);
console.log(myIterNums); 

//filter allows us to run a conditional over every item in array
//if item is true it keeps it, if item is false it removes it

function isBigNum(num) {
    // this is our conditional, either true or false
    return num > 10
}; 

//filter takes in 1 argument which is the function to run over all items
const myFilterNums = myNums.filter(isBigNum); //if its true the item stays, if its false the item goes

console.log(myFilterNums); 


//reduce allows us to accumulate quantitative totals of our arrays
//reduce takes in 1 arugment which is function to run over all items

function sumUp(accumulator, currentValue) {
    // using the + operator to sum up our array total
    return accumulator + currentValue
};

function multUp(accumulator, currentValue) {
    return accumulator * currentValue;
}

let mySumNums = myNums.reduce(sumUp);
let myProdNums = myNums.reduce(multUp);
console.log(mySumNums); 
console.log(myProdNums);


// SORTING, DESTRUCTURING & ITERATING OVER OUR ARRAYS

// sorting numbers we need to add the (a,b) => a - b as an argument to the sort()
myNums.sort((a,b)=> a - b); //in place aka sorting the original list
console.log(myNums);
myNums.sort((a,b) => b - a);
console.log(myNums);

//out of place aka creates a new array object and leaves the original alone
let myOutPlaceSort = myNums.toSorted((a,b) => a - b);
console.log(myOutPlaceSort); 


//destructuring 

let myBenders = ['Aang', 'Katara', 'Toph', 'Zuko'];

//destructuring allows us to take an iterable and assign INDIVIDUAL variables based off the items inn the iterable
// let aang = myBenders[0];
// let katara = myBenders[1];

// instead of doing above we can do this
// is assigned POSITIONALLY
// spread operator ... (this is VERY greedy, takes everything it can) akin to *args in Python
let [elephant, dolphin, ...otherBenders] = myBenders;

console.log(elephant);
console.log(dolphin);
console.log(otherBenders);


//iterating over an ARRAY specifically 
//an array has a specific method for iteraing called the .forEach()
//the forEach is seen as better practice whenn iteraing over an ARRAY specifically
myBenders.forEach( bender => {
    console.log(bender)
})

// trying to do variable deconstructuring with a forEach loop but won't be smooth
// let myVarNames = [elephant, dolphin, otherBenders]
// let myInd = 0
// myBenders.forEach( bender => {
//     myVarNames[myInd] = bender
//     myInd += 1
// })

//for each is same as 
for (let bender of myBenders) {
    console.log(bender)
}

// in grabs the index, of grabs the value
// for (let bender in myBenders) {
//     console.log(bender)
// }


// SPREAD & REST OPERATORS (...)

//spread operator allows you to spread values (from their originaal container/array) into a new variable/array. 

let original = [1,2,3];
let newArray = [4, 5, ...original];
console.log(newArray);

//rest operator grabs individual items and bundles them into one variable

//this guy is essentially *args
function addAllNums(...numbers) {
    console.log(numbers);
    return numbers.reduce((acc, currentVal) => acc + currentVal, 0);
}

console.log(addAllNums(7, 11, 82, 101));


// STRING MANIPULATIONN & SEARCHING

let message = "Hello SE147 Hello"

console.log(message.length)
console.log(message.indexOf('SE147')); //returns the START of my value aakin to .index()
console.log(message.substring(6,)); //substrinng takes 2 arguments 'end' is optional (start, end)
console.log(message.split(' ')); //no default if you want to split on space you must include ' ' in your ()
console.log(message.lastIndexOf('Hello')); 
console.log(message.includes('147')); //lovely search technique for membership check since regular membership check is not allowed in strings


// Array search techniques
console.log(original.includes(1)); //you can do regular membership checks in arrays but also can do the .includes()
console.log(1 in original); 


// REGULAR EXPRESSION
// same symbols that pythonn utilizies JS also utilizes the main difference is settinng your pattern

let pattern = /SE147/ // using the / to build our patterns
let pattern2 = /Hello/g //regular expression object 
// inn the above pattern 'g' stands for global aka searching the ENTIRE string for ALL matches


console.log(pattern.test(message)) //output true or false
console.log(message.match(pattern2)) //output a list (match object) with our matchs
console.log(message.match(pattern2)['input'])

// the matchAll creates an Iterator object
// we want to turn this into an array we can manipulate
// if you KNOW there could be more than 1 match use g in your pattern to search for ALL matches
// also use the .matchAll if you need information about the matches
console.log(message.matchAll(pattern2)); //not helpful
const matchArray = [...message.matchAll(pattern2)]; //needs to turn iterator object into array inorder to grab the informationn from it
console.log(matchArray); 
console.log(matchArray[1]['index']); 

let myDigits = "Hey it was nice to meet you. My phone # is 888-392-3993"

let digitPattern = /[\d]{3}-[\d]{3}-[\d]{4}/

console.log(digitPattern.test(myDigits)); 


















