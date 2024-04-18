#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const answers:{
    sentence: string
} = await inquirer.prompt([
    { name: "sentence",
      type: "input",
     message: "Enter your sentence to count the words:"
    }
])
const words = answers.sentence.trim().split(" ")

//print the array of words to the console

console.log(chalk.yellowBright(words));

//print the word count of the sentence to console
console.log(chalk.redBright(`Your sentence word count is ${words.length}`));

