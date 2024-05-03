/*
for(let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}

const names = ['Jade', 'John', 'Jesus'];

for (let i = 0; i< names.length; i++) {
    let html = `<div>${names[i]}<div>`;
    console.log(html);
}

let i = 0;

while (i < 5) {
    console.log(`in loop:`, i);
    i++;
}

i = 0;

while (i < names.length) {
    console.log(names[i]);
    i++;
}


const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }

    console.log('your score:', scores[i]);

    if (scores[i] === 100) {
        console.log('Congratulations, you got the top score!');
        break;
    }
}

const grade = 'D';

switch(grade) {
    case 'A':
        console.log('You got an A.');
        break;
    case 'B':
        console.log('You got a B.');
        break;
    case 'C':
        console.log('You got a C.');
        break;
    case 'D':
        console.log('You got a D.');
        break;
    case 'E':
        console.log('You got an E.');
        break;
    default:
        console.log('Invalid grade,')
}

let age = 30;

if (true) {
    let age = 40;
    let name = 'Jade'
    console.log('Inside 1st code block:', age, name);

    if (true) {
        let age = 50;
        console.log('Inside 2nd code block:', age)
    }
}

console.log('Outside code block:', age, name);
// Same rules of scope apply to const.
*/