var retailPrice = prompt("What is the retail price of the item?");

var taxPercentage = prompt("What is the tax percentage in your area?");

var taxDecimal = taxPercentage / 100;

var tax = taxDecimal * retailPrice;

var purchasePrice = +retailPrice + +tax;

alert("With a retail price of " + retailPrice + " and a tax percentage of " + taxPercentage + " then your tax will be " + tax + " and your total purchase price will be " + purchasePrice + ".");