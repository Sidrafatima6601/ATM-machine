#! /usr/bin/env node
import inquirer from "inquirer";
// initialize user balance and pin code
let myBalance = 5000;
let myPin = 7777;
//print welcome message
console.log("welcome to sidra fatima - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login succussfully!");
    console.log(`current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethode",
                type: "list",
                message: "select a withdrawl methode:",
                choices: ["fast cash", "enter amount"]
            }
        ]);
        if (withdrawAns.withdrawMethode === "fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} withdraw successfully`);
                console.log(` your remaining balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethode === "enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= amountAns;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, try again!");
}
