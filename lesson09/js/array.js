/******************************************/
/*      Create and modify Array           */
/******************************************/

/* Create empty array */
const arr = [];

/* Create initialised array */
const arr = [3, 2, 5];

/* Number of items */
const arr = [3, 2, 5];
const len = arr.length;
// 3

/* Modify array */
arr[0] = -3;
// [-3, 2, 5]
arr[4] = -4;
// [-3, 2, 5, empty, -4]

/* Push to array */
const arr = [];
arr.push(1);
// [1]
arr.push(2, 3, 4);
// [1, 2, 3, 4]

/* Pop from array */
const arr = [1, 2, 3, 4];
let item = arr.pop();
// [1, 2, 3]
console.log(item);
// 4

/* Insert item at position */
const arr = ['a', 'b', 'd'];
// remove 0 items before idx 2 and insert item at idx 2
arr.splice(2, 0, 'c');
// ["a", "b", "c", "d"]

/******************************************/
/*          Cloning and spread fun        */
/******************************************/

/* clone array with spread operator */
const arr = [1, 2, 3, 4];
const myArr = [ ...arr ];
// [1, 2, 3, 4]

/* clone and add items to array by spread */
const arr = [1, 2, 3, 4];
const myArr = [ ...arr, 5, 6 ];
// [1, 2, 3, 4, 5, 6]


/******************************************/
/*                Checks                  */
/******************************************/

/* Check if Array */
const arr = [];
const notArr = {};
console.log(Array.isArray(arr));
// true
console.log(Array.isArray(notArr));
// false

/* Is item in Array */
const arr = [1, 2, 3, 4];
console.log(arr.includes(2));
// true
console.log(arr.includes('a'));
// false

/* Index of item in array */
const arr = [1, 2, 3, 4];
let idx = arr.indexOf(3);
// 2
let idx = arr.indexOf('a');
// -1

/******************************************/
/*           Array mutations              */
/******************************************/

/* reverse array */
const arr = [1, 2, 3, 4];
arr.reverse();
// [4, 3, 2, 1]

/* remove N elements from position */
const arr = [1, 2, 3, 4];
const removed = arr.splice(1, 2);
// [1, 4]
console.log(removed);
// [2, 3]

/* to retrieve N elements from position without affecting original array use clone */
const arr = [1, 2, 3, 4];
const retrieved = [...arr].splice(1, 2);
// [1, 2, 3, 4]
console.log(retrieved);
// [2, 3]

/* Sort array */
const arr = [3, 2, 5, 1, 0, 4];
arr.sort();
// [0, 1, 2, 3, 4, 5]

/* Sort array immutable way */
const arr = [3, 2, 5, 1, 0, 4];
const myArr = [...arr].sort();
console.log(arr);
// [3, 2, 5, 1, 0, 4];
console.log(myArr);
// [0, 1, 2, 3, 4, 5]


/******************************************/
/*          Merging, Flattening           */
/******************************************/

/* merge arrays */
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const myArr = arr.concat(arr2);
// [1, 2, 3, 4, 5, 6]

/* merge arrays by spred operators */
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const myArr = [...arr, ...arr2];
// [1, 2, 3, 4, 5, 6]

/* flatten - join items with string */
const arr = ['tic', 'tac', 'toe'];
const txt = arr.join('-');
// "tic-tac-toe"

/* deflate string to array */
const txt = "tic-tac-toe";
const arr = txt.split('-');
// ['tic', 'tac', 'toe']


/******************************************/
/*    Higher Order array mainpulations    */
/******************************************/

const arr = [3, 2, 5, 1, 0, 4];
let outArr;

/* loop over array */
arr.forEach((item) => {
  console.log(item);
});

/* loop over array and get item index */
arr.forEach((item, idx) => {
  console.log(`${idx}: ${item}`);
});
// 0: 3
// 1: 2
// ...

/* loope over array, manipulate items and put them to new array */
outArr = arr.map((item) => {
  return item * 2;
});
// [6, 4, 10, 2, 0, 8]

/* put to new array items that fulfill condition */
outArr = arr.filter((item) => {
  return item % 2 === 0;
});
// [2, 0, 4]

/* do operation with all items in array to produce accumulated result */
const sum = arr.reduce((acc, item) => {
  return acc += item;
}, 0);
// 15