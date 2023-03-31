'use strict';


// it helps us avoid some set of errors

/*
let hadDriversLicense = false;

const passTest = true;

if(passTest) hadDriverLicense = true;

if(hadDriversLicense) console.log(`I can drive :D`)

strict mode also reservered some words to be used in the future



const interface = `Audio`;
const private = 591




// functions

//  a peice of code that can be reused over and over again and hold a piece of code


function logger (){
    console.log(`MMy name is Amos`)
}


// invoking the function || calling the function || running thefunction


logger()
logger()
logger()

function fruitProcesor(apples, oranges) {


    const juice = `Juice with ${apples} apples and ${oranges} oranges`

    return juice
}


const appleJuice = fruitProcesor(5, 0)
console.log(appleJuice);

const appleOrangeJuice = fruitProcesor(2,4);

console.log(appleOrangeJuice)



// function declarations and expressions

// function declaration

// u can call a function declearation before defining them

function calcAge1(birtYear){
    return 2037 - birtYear
}

const age1 = calcAge1(1991);

console.log(age1);


// function expression

// always note that expression give a value;
// the function here has no name and it is called an annonymous function

// the function must be defined before invoking or calling them

// this also allow us to store our return value from the function into a variable

const calcAge2 = function(birtYear){
    return 2037 - birtYear
}

const age2 = calcAge2(1991);

console.log(age2)

// calcAge2 becomes the function



// arrow function

// this is the shorter way of writing a function expresssion

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1997)

console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;


    return `${firstName} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(1991, 'Amos'))
console.log(yearsUntilRetirement(2004, 'Testimoney'))



// calling function into another function


function cutpieces(fruits){
    return fruits * 4;
}


function fruitProcesor(apples, oranges) {

    const applePieces = cutpieces(apples);
    const orangePieces = cutpieces(oranges);


    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    
    return juice
}


console.log(fruitProcesor(2, 3))



const calcAge = function(birthYear){
    return 2037 - birthYear;
}


const yearsUntilRetirement = (birthYear, firstName) => {
    const age =  calcAge(birthYear)
    const retirement = 65 - age;


    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`)
         return retirement;
    }else{
        console.log(`${firstName} has already retired`);

        return -1
    }
}

// note that the return statment exist the function;

console.log(yearsUntilRetirement(1991, 'Amos'))
console.log(yearsUntilRetirement(1950, 'Testimony'))



// coding challenge one


const calculateAverge = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3



let dolphins = calculateAverge(44, 23, 71);
let koalas = calculateAverge(65, 54, 49);


console.log(dolphins, koalas)


const checkWinner = (avgDolphins, avgKoalas) => {

   if(avgDolphins >= (koalas * 2)){
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
   }else if (avgKoalas >= (avgDolphins * 2)){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`
   }else{
    return `no winner`
   }
}


console.log(checkWinner(dolphins, koalas))

dolphins = calculateAverge(85, 54, 41);
koalas = calculateAverge(23, 34, 27);



console.log(checkWinner(dolphins, koalas))




// Introductions to Arrays

const friends = ['Micheal', 'Stephen', 'Peter'];


// another way of creating an array

const y = new Array(1991, 1984, 2008, 2020);



console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

// to find the number of element in the array

console.log(friends.length);

// to find the last element in the array

console.log(friends[friends.length - 1])

// mutating or changing the element in an array

friends[2] = 'Jay';

console.log(friends);

// only prmimitive value are immutable i.e they can be changed

// cannot do this

// friends = ['Bob', 'Alice']

// an array can hold different values of different types

const firstName = 'Amos';
const amos = [firstName, 'Adeyemo', 2037 - 1991, 'teacher', friends]

console.log(amos)
console.log(amos.length)

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [1991, 1967, 2002, 2010, 2018];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages)

// Methods in array

// there are some built in function that we can basically apply directly on arrrays

// there are array operations



const friends = ['Micheal', 'Stephen', 'Peter'];

// Add Element

const newLength = friends.push('Jay');

// push function will return the lenght of the new array;


console.log(friends);
console.log(newLength);

friends.unshift(`John`);

console.log(friends);

// Remove Element

friends.pop();
const popped = friends.pop();
console.log(popped)
console.log(friends)

friends.shift();
console.log(friends);

// indexOf

console.log(friends.indexOf(`Stephen`))
console.log(friends.indexOf(`Bob`))

// includes is the advance method of index of
// and it uses the stricty equality operator

friends.push(23)

console.log(friends.includes(`Stephen`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if(friends.includes(`Stephen`)){
    console.log(`You have a friend called Stephen`)
}



// coding chanllenge 2


const calcTips = value => value >= 50 && value <= 300 ? 0.15 * value : 0.20 * value;

const tips = calcTips(100);

console.log(tips)

const tipsData = [125, 555, 44];


const tipsArray = [calcTips(tipsData[0]), calcTips(tipsData[1]), calcTips(tipsData[2])];

const total = [tipsArray[0] + tipsData[0],tipsArray[1] + tipsData[1], tipsArray[2] + tipsData[2]]

console.log(tipsArray)
console.log(total)



// Objects

// object allows us to give our value a name: key, in which we can use to identify each values;

const jonasArray = [
    'Amos',
    'Adeyemo',
    2037 - 1991,
    'teacher',
   
]


// the array does not have a key in which u can use to reference those data, we only reference them by order of number;

// the key is calle the variable 

// the key is also called property  i.e the object amos has five properties



// the difference btw object and array is the in object the order of the value doesnt matter when we want to retrieve them

// use array for order data and use object for unstructured data




// how to get data from an object

const amos = {

    firstName: 'Amos',
    lastName: 'Adeyemo',
    age: 2037 -  1991,
    job: 'teacher',
    friends:  ['Micheal', 'Peter', 'Stephen']



}


console.log(amos)
console.log(amos.lastName);
console.log(amos['firstName']);

const nameKey = 'Name';

console.log(amos['first' + nameKey]);
console.log(amos['last' + nameKey]);

// undefined is what we get when we try to access a property in an object that does not exsit

const intrestedIn = prompt(`What do you want to know about Amos?  Choose between firstname, lastname, age, job and friends`);



if(amos[intrestedIn]){
    console.log(amos[intrestedIn]);
}else{
    console.log(`Wrong Request! sChoose between firstname, lastname, age, job and friends`);
}


amos.location = 'Nigeria';

amos['twitter'] = '@haymous_hay';

console.log(amos)


console.log(`${amos.firstName} has ${amos.friends.length} friends and his best friend is called ${amos.friends[0]}`);




// objects methods

// any function attached to an object is called a method;


const amos = {

    firstName: 'Amos',
    lastName: 'Adeyemo',
    birthYear: 1991,
    job: 'teacher',
    friends:  ['Micheal', 'Peter', 'Stephen'],
    hasDriversLicense: false,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function(){
      this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} old ${this.job} and he ${this.hasDriversLicense ? 'has' : 'does not have'} a drivers License`
    }
}


console.log(amos.calcAge());
// console.log(amos['calcAge'](1991));

console.log(amos.age)
console.log(amos.getSummary())



// chanllenge 4

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height:1.95,



    calcBmi: function(){
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;

    }
}


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height:1.69,



    calcBmi: function(){
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;

    }
}


john.calcBmi();
mark.calcBmi();

console.log(john.bmi > mark.bmi ? `${john.firstName + ' ' + john.lastName} BMI (${john.bmi}) is higher than ${mark.firstName + ' ' + mark.lastName} ${mark.bmi}` :
`${mark.firstName + ' ' + mark.lastName} BMI (${mark.bmi}) is higher than ${john.firstName + ' ' + john.lastName} ${john.bmi}
`)


// Loops

// these are control structure 
// they allow us to automate repetitive task 

// console.log('Lifting weight repetition 1');
// console.log('Lifting weight repetition 2');
// console.log('Lifting weight repetition 3');
// console.log('Lifting weight repetition 4');
// console.log('Lifting weight repetition 5');
// console.log('Lifting weight repetition 6');
// console.log('Lifting weight repetition 7');
// console.log('Lifting weight repetition 8');
// console.log('Lifting weight repetition 9');
// console.log('Lifting weight repetition 10');

// for loop keeps running while the condition is true
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weight repetition ${rep}`);
}

// looping arrays  in a for loop

const jonasArray = [
    'Amos',
    'Adeyemo',
    2037 - 1991,
    'teacher',
    true,
   
]


const types = [];

for(let i = 0; i < jonasArray.length; i++){

    // reading the data from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i])


    // filling the types array

    // types[i] = typeof jonasArray[i];

    // or

    types.push(typeof jonasArray[i])
}

console.log(types)


const years = [1991, 2007, 1969, 2020];

const ages = [];


for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}

console.log(ages)

// continue and the break statement

// continue statement allows us to exist the currrent iteration of a loop;

// break terninate the whole loop, not just the current iteration 


console.log(`--- ONLY STRINGS ---`)
for(let i = 0; i < jonasArray.length; i++){

    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i])
 
}

console.log(`--- BREAK WITH NUMBER ---`)
for(let i = 0; i < jonasArray.length; i++){

    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i])
 
}



// looping an array backwords;


const jonasArray = [
    'Amos',
    'Adeyemo',
    2037 - 1991,
    'teacher',
   
    ['Micheal', 'Peter', 'Stephen']
   
]

for(let i = jonasArray.length - 1; i >= 0; i--){

    console.log(jonasArray[i], i)
}

// A loop inside a loop;


for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Starting Exercise ${exercise}`);


    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: lifting weight ${rep}`)
    }
}



// the while loop;

// while loops does not need a counter all its need is the condition to stay true;

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep}`);
// }


let rep = 1; // counter

while(rep <= 10){
    // console.log(`Lifting weight repetition ${rep}`);
    rep++

}


let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You have rolled s ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;

    if(dice === 6){
        console.log(`loop is about to end`)
    }
}

*/

// challenge 5;
const calcTips = value => value >= 50 && value <= 300 ? 0.15 * value : 0.20 * value;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsAndTotal = []

for(let reps = 0; reps < bills.length; reps++){
   tipsAndTotal.push(calcTips(bills[reps]) + bills[reps])
}

console.log(tipsAndTotal)


const calcAverage = (arr) => {
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    return total / arr.length;
}


console.log(calcAverage(bills))