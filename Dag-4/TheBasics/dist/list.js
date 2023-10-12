"use strict";
// Explicit typad array...
const numberList = [1, 2, 3, 4, 5];
numberList[0] = 100;
// numberList[0] = "100";
// Implicit typad array
const numbersList = [1, 2, 3, 4, 5];
numbersList[1] = 25;
// numbersList[1] = "25";
// Alternativ syntax till att skapa en array...
const movieCategories = [];
const manufacturerList = [];
manufacturerList.push({ name: 'Volvo', country: 'Sweden' });
// manufacturerList.push({ name: 'Volvo', country: 'Sweden', phone: 12345 });
// Multidimensionella listor...
const demo = [[]];
const demo1 = [[[]]];
