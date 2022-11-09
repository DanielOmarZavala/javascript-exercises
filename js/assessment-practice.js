"use strict";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';



async function userInput() {
    const rl = readline.createInterface({input, output});

    const answer = await rl.question('Please select an option: 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division: ');

    console.log(`Thank you for your valuable feedback: ${answer}`);


    console.log(choiceFunc(answer));

    rl.close();



}

async function choiceFunc(userIn) {

    if (userIn === "1") {
        console.log("User entered 1");

        const rl2 = readline.createInterface({input, output}).then(input => {
            return input
        });

        const answer2 = await rl2.question('Please enter two numbers: ');

        console.log(add(answer2));

        rl2.close();


    } else if (userIn === "2") {
        console.log("User entered 2");
    } else if (userIn === "3") {
        console.log("User entered 3");
    } else if (userIn === "4") {
        console.log("User entered 4");
    }

    return 1;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2, num3) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num1 === 0) {
        console.log(`You cannot divide by zero!`)
    }

    return num1 / num2;
}

// console.log(`Addition test: ${add(1, 2)}`);
// console.log(`Subtraction test: ${subtraction(2, 1)}`);
console.log(`Division test: ${division(0, 2)}`);
userInput();
