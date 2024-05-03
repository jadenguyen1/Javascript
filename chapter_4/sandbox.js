/*
// function expression (cannot be hoisted)
const speak = function() {
    console.log("Goodnight, moon.")
};

greet();
speak();

// function declaration (being hoisted to the top)
function greet() {
    console.log('Hello, world.');
}

const greet = function(name = 'user', weather = 'nice') {
    console.log(`Hello, ${name}, it's ${weather} outside today.`)
}

greet('Jade', 'cloudy');
greet();

const calcArea = function(radius) {
    return(3.14 * radius**2)
}

// arrow function
const calcArea = radius => {
    return(3.14 * radius**2) 
};

const greet = (name, weather) => {
    console.log(`Hello, ${name}, it's ${weather} outside today.`)
}

const speak =() => console.log("Goodnight, moon.");

let area = calcArea(5)
console.log(area);
greet('Jade', 'cloudy');
speak();

const name = 'Jade';

// function
const greet = () => 'Hello!';
let resultOne = greet();
console.log(resultOne);

// method
let resultTwo = name.toUpperCase();
console.log(resultTwo);


const myFunction = (callbackFunction) => {
    let value = 50;
    callbackFunction(value)
};

myFunction(value => {
    console.log(value);
});
*/
const people = ['Mario', 'Luigi', 'Peach', 'Bowser', 'Toad'];
/*
const logPerson = (person, index) => {
    console.log(`${index} - Hello, ${person}`);
}

people.forEach(logPerson);


let html = ``;
const ul = document.querySelector('.people');

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
*/