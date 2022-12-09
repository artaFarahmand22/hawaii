const buttonA = document.querySelector('#button_a');
const headingA = document.querySelector('#heading_a');

buttonA.onclick = () => {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you`);
    headingA.textContent = `Welcome ${name}`;
}

let myAge = 38
let myName = 'Christopher'
console.log(`My name is ${myName} and I'm ${myAge} years old`)

const a = 5;
const b = 10;
console.log('Fifteen is ' + (a + b) + " and\nnot " + (2 * a + b) + '.')
console.log(`Fifteen is ${a + b} and not ${2 * a + b}`)

const student = {
    firstname: 'James',
    middlename: 'T',
    lastname: 'Kirk',
    school: 'Star Fleet Academy',
    class: 5
}

console.log(student.firstname + ' ' + student.middlename + ' ' + student.lastname)

let counter = 0;
console.log(counter);
counter = counter + 1
console.log(counter)
counter = counter + 1
console.log (counter)
counter = counter + 1
console.log (counter)
counter = counter + 1
console.log (counter)

const numbValue = 1;
if(numbValue > 5) {
    console.log(`${numbValue} is greater than 5`);
} else if (numbValue > 3 && numbValue < 5) {
    console.log(`${numbValue} is greater than 3 and less than 5`) 
} else {
    console.log(`${numbValue} is not greeater than 5`)
}

for(let step = 0; step <5;  step++) {
    console.log('Walking east one step')
}

for(let i = 0; i < 10; i += 1) {
    console.log(i);
}

let fruit = ['organe', 'blue berry', 'raspberry', 'apple']
for(let xx = 0; xx <= fruit.length;  xx++) {
    console.log(fruit[xx])
}

let m=1, n=5
while(m<=n){
    console.log(m);
    m+=1;
}

let j = 1;
const k = 5;

do{
    console.log(j);
    j++;
} while(j <= k);

let g = 10
let x = 0;

function createFunction1() {
    const g = 20;
    return new Function('return g');
}

function createFunction2() {
    const g = 20;
    function f() {
        return g;
    }
    return f;
}

const f1 = createFunction1();
console.log(f1())
const f2 = createFunction2();
console.log(f2())