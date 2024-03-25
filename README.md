

<br/>
<p align="center">
  <h3 align="center">Js Utility</h3>

  <p align="center">
    A collection of utility functions to simplify JavaScript development.
    <br/>
    <br/>
    <a href="https://github.com/ShaanCoding/ReadME-Generator"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/ShaanCoding/ReadME-Generator">View Demo</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Report Bug</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Request Feature</a>
  </p>
</p>


Welcome to My JavaScript Utility Functions Library! This repository contains a collection of utility functions organized into modules for common tasks in JavaScript. Whether you're working on a small project or a large-scale application, these functions can help streamline your development process.
## Table Of Contents

* [Introduction](#Introduction)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Available Functions](#AvailableFunctions)
  * [Array Functions](#array-functions)
  * [Object Functions](#object-functions)
  * [String Functions](#string-functions)
  * [Math Functions](#math-functions)
  * [And More...](#and-more)
* [License](#License)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

Welcome to My JavaScript Utility Functions Library! This repository contains a collection of utility functions organized into modules for common tasks in JavaScript. Whether you're working on a small project or a large-scale application, these functions can help streamline your development process.

## Getting Started

To use this library in your project, you can clone this repository locally:

``bash
git clone https://github.com/eaysin-arafat/js-utility.git

Alternatively, you can fork this repository to your own GitHub account and then clone it:
``bash
git clone https://github.com/yourusername/your-forked-repository.git

## Usage
Once you have the repository cloned or forked, you can simply import the utility functions you need into your project files. For example:

javascript
// Import the utility functions
const utils = require('./index');

// Example usage of utility functions
const array = [1, 2, 3, 4, 5];
const lastValue = utils.last(array);
console.log(lastValue); // Output: 5

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const diff = utils.differenceBy(obj1, [obj2], 'b');
console.log(diff); // Output: [{ a: 1 }]

## Contributing

* Contributions are welcome! If you have any utility functions you'd like to add or improve, please feel free to [open an issue](https://github.com/ShaanCoding/ReadME-Generator/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes. Make sure to follow the existing coding style and conventions, and include relevant tests and documentation for any new functions.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/ShaanCoding/ReadME-Generator/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.

## Available Functions

Array Functions
-head(array): Returns the first element of an array.
-indexOf(array, value): Returns the index of the first occurrence of a value in an array.
initialize(array, value): Initializes an array with the specified value.
intersection(array1, array2): Returns the intersection of two arrays.
intersectionByIndex(array1, array2): Returns the index-based intersection of two arrays.
join(array, separator): Joins the elements of an array into a string using a specified separator.
... (list other array functions)
Object Functions
differenceBy(object, values, iteratee): Creates an array of object values not included in the other given arrays, using a comparator function.
sortedLastIndexBy(array, value, iteratee): This method is like sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking.
takeRightWhile(array, predicate): Creates a slice of array with elements taken from the end until predicate returns falsey.
... (list other object functions)
String Functions
capitalize(string): Capitalizes the first character of a string.
endsWith(string, target): Checks if a string ends with the given target string.
lowerCase(string): Converts a string to lowercase.
... (list other string functions)
Math Functions
add(a, b): Adds two numbers.
subtract(a, b): Subtracts one number from another.
multiply(a, b): Multiplies two numbers.
... (list other math functions)
And More...
This library contains many more utility functions covering a wide range of tasks. Feel free to explore the source code to discover additional functions that may be useful in your projects.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Replace placeholders like `yourusername`, `your-repository`, and `your-forked-repository` with your actual GitHub username and repository names. This README provides detailed instructions on installation, usage, available functions, contributing guidelines, and license information for your repository.


