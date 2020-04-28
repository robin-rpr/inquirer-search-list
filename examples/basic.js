"use strict";
const inquirer = require("inquirer");
inquirer.registerPrompt("search-checkbox", require("../dist"));

inquirer
	.prompt([
		{
			type: "search-list",
			message: "Select topping",
			name: "topping",
			choices: [
				{
					name: "Pepperoni"
				},
				{
					name: "Ham"
				},
				{
					name: "Ground Meat"
				},
				{
					name: "Bacon"
				},
				{
					name: "Mozzarella"
				},
                                {
                                        name: "Bottle"
                                }
			],
			validate: function(answer) {
				if (answer === 'Bottle') {
					return `Whoops, ${answer} is not a real topping.`;
				}
				return true;
			}
		}
	])
	.then(function(answers) {
		console.log(JSON.stringify(answers, null, "  "));
	})
	.catch(e => console.log(e));
