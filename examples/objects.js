"use strict";
const inquirer = require("inquirer");

// Register plugin
inquirer.registerPrompt("search-list", require("../dist"));

const toppings = [
  {title: "Pepperoni", usage: "Pizza"},
  {title: "Ham", usage: "Sandwich"},
  {title: "Ground Meat", usage: "BBQ"},
  {title: "Bacon", usage: "Love"},
  {title: "Bottle", usage: "Drinks"},
  {title: "Mozzarella", usage: "Pizza"},
  {title: "Rum", usage: "Party"},
]

inquirer
    .prompt([
        {
            type: "search-list",
            message: "Select topping",
            name: "topping",
            choices: toppings.map(topping => ({name: topping.title, value: topping })),
            validate: function(answer) {
                if (answer.name === 'Bottle') {
                    return `Whoops, ${answer.name} is not a real topping.`;
                }
                return true;
            }
        }
    ])
    .then(function(answers) {
        console.log(JSON.stringify(answers, null, "  "));
    })
    .catch(e => console.log(e));
