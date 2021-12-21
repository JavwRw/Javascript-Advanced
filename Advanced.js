console.clear()

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - ARRAYS (PART 1)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//storing a list of friends

var mFriends =["Shaw", "Jacob", "Kun", "Vab", "Clara", "Ruan", "Andrea"]
console.log(mFriends); //returns ['Shaw', 'Jacob', 'Kun', 'Vab', 'Clara', 'Ruan', 'Andrea']
console.log(typeof(mFriends)); //returns objects

//NOTE: Arrays uses positions to access data

console.log(mFriends[2]); //returns Kun - Starts at 0 - Shaw

//Update a value
mFriends[0] = "Shawn" //changes "Shaw" to "Shawn"

//Add more items
//1
mFriends[7] = "Alan" //Adds Alan to list (Known number of values)

//2 Unkown number of values
//Get length
var mLength = mFriends.length
console.log(mLength); //returns 8

//Add at 1 after length
mFriends[8] = "Emma"
console.log(mFriends);

//3 - {.push} = adds value at the end of the array
mFriends.push("Jack")
console.log(mFriends);

//Delete a value = .pop - Removes LAST value in array and returns it to us
mFriends.pop();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - ARRAYS (PART 2)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var mFriends =["Shaw", "Jacob", "Kun", "Vab", "Clara", "Ruan", "Andrea"]
console.log(mFriends);

//Add/remove at specific location
mFriends.splice(3, 0, 'Donna', 'Rachel')
//.splice[where to start, how many to DELETE, (3rd and up) what to be ADDED]

console.log(mFriends);

//DELETE at specific position
mFriends.splice(4, 1)

console.log(mFriends);

//Concatenation - merges list together
var mFamily = ['Pa', 'Ma', 'Frikan', 'Elri', 'Strijdom', 'Sanja', 'Willie', 'Anna']

var mAllConnections = mFriends.concat(mFamily)
console.log(mAllConnections);

//Sorting Ascending .sort
mFriends.sort() //Sorts ascending order
console.log('mFriends: ', mFriends);

//Sorting Descinding .revers
mFriends.reverse()
console.log('mFriends: ', mFriends);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - LOOPS
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//WHILE LOOP
var mValue = 0
while (mValue <= 50) {
    mValue++
}
console.log(mValue);

//FOR LOOP
var mList = [1, 2, 3, 4, 5]
var pos;

for (pos = 0; pos < mList.length; pos++) {
    console.log('Position: '+pos+' Value: '+mList[pos]);
}

//Break - exit for loop when a condition is met
for (let index = 0; index < mFamily.length; index++) {
    if (index >= 3) break
    console.log('Family member '+(index+1)+': '+mFamily[index]);
}

//Continue - starts the next iteration and skips the current iteration
for (let index = 0; index < mFamily.length; index++) {
    if (index % 2 !== 0) continue//gives all the values in the list at even numbers by skipping as soon as it reaches a uneven position/index
    console.log('Family member '+(index)+': '+mFamily[index]);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - FUNCTIONS
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('JAVASCRIPT - FUNCTIONS');
console.log(' ');
// function functionName(param1, param2, ..., paramN) { NOTE: Parameters not needed
    // block of code
//}

//Example: function that prints the sum of two numbers
function sumFunction() { //No parameters passed
    var num1 = 10;
    var num2 = 20;
    var mSum = num1 + num2;

    console.log(mSum);
}

sumFunction()//calls function which execute

//function that returns a value
function retFunction() {
    var num1 = 10;
    var num2 = 20;
    var nSum = num1 + num2;
    
    return nSum //function stops executing at return
}

console.log('retFunction(): ', retFunction());

//FUNCTION ARGUMENTS
console.log(' ');

//e.g 1
function greetings(personName) {
    console.log('Welcome ' + personName);
}

greetings('Adam');//pass a value to the function when calling the function
greetings('Ruan');

console.log(' ');

//e.g 2
function totalSum(num1, num2, num3=40) {//default value but can still be passed a value when function is called - this overides the default value
    console.log(num1 + num2);
}

totalSum(1, 2);
totalSum(35, 25);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - SCOPE AND ENVIRONMENT
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('SCOPE AND ENVIRONMENT');
console.log(' ');

//SCOPE

//Scope - NB! defines the part in program where variable/function is visible/accessible. 
//1. "Global Variables" - variables defined outside functions/blocks and available throughout code.
//2. "Local Variables" - declared inside a function and can only be accessed here.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - VARIABLE HOISTING
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('VARIABLE HOISTING');
console.log(' ');

//Hoisting - in Js we can use variable/function before declaring it. This is because JS first declares then executes
x = "some string"
var x

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - FUNCTION HOISTING
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('FUNCTION HOISTING');
console.log(' ');

//Same as variable hoisting - in Js we can use variable/function before declaring it. This is because JS first creates then executes
sum(5, 10)

function sum(num1, num2) {
    console.log(num1+num2);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - INTRODUCTION TO DOM
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('INTRODUCTION TO DOM');
console.log(' ');

//DOM - Document Object Model
//DOM = created by browser when a web page is loaded and is a tree representatio of the HTML document. DOM can be modified via JS

//What can JS do/modify?:

//1. Add new HTML elements/attributes
//2. change HTML elements/attributes
//3. change CSS
//4. remove HTML elements/attributes
//5. add/listen to HTML events (e.g. onClick, onScroll)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - SELECT HTML ELEMENTS
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('SELECT HTML ELEMENTS');
console.log(' ');

//getElementById - DOM Method that accepts HTML element ID and returns the HTML element that matches the ID

console.log(document.getElementById("header")); //returns <h1 id="header">Javascript Advanced</h1>

//getElementByClass - DOM Method that accepts HTML class string and returns the HTML element that matches the class

//getElementByTagName - DOM Method that accepts HTML tag name and returns the HTML element that matches the tag
console.log(document.getElementsByTagName('h1'));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - QUERY SELECTORS
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('SELECT HTML ELEMENTS');
console.log(' ');

//Helps to selct HTML elements

//querySelector() - accepts CSS selectors string, returns first HTML element matching query
console.log(document.querySelector());//not widely supported by all browser so rather use getElement (which is also FASTER)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT - UPDATE HTML ELEMENTS
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(' ');
console.log('SELECT HTML ELEMENTS');
console.log(' ');