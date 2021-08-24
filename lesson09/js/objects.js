/******************************************/
/*               Objects                  */
/******************************************/

/* Create empty anonymous object */
const obj = {};

/* Create initialised anonymous object */
const obj = {
  a: 'a',
  b: 'b',
  c: 1,
  d: [1, 2],
  'multi word': 20
};

/* List all object keys */
Object.keys(obj);
// ["a", "b", "c", "d"]

/* Modify object */
obj.b = 'bb';
obj['multi word'] = 2020;
// {a: "a", b: "bb", c: 1, d: Array(2), multi word: 2020}

/* Add to object */
obj.x = 'x';

/* Remove from object */
delete obj.x;


/******************************************/
/*      Object assigned by reference      */
/******************************************/

/*
Assignement operator = does not create new copy
but only references same object.
*/
const obj = { a: 'a', b: 'b', c: 1 };
const myObj = obj;
// {a: "a", b: "b", c: 1}
obj.a = 'aa';
console.log(myObj.a);
// 'aa'
myObj.b = 'bb';
console.log(obj.b);
// 'bb'

/******************************************/
/*          Cloning and spread fun        */
/******************************************/

/* clone object with spread operator */
const obj = { a: 'a', b: 'b', c: 1 };
const myObj = { ...obj };
// {a: "a", b: "b", c: 1}

/* clone and add/modify items to object by spread */
const obj = { a: 'a', b: 'b', c: 1 };
const myObj = {
  ...obj,
  a: 'aa',
  x: 20
};
// {a: "aa", b: "b", c: 1, x: 20};

/******************************************/
/*  Create object by instantiating class  */
/******************************************/

const obj = new Person('Janko', 'Hrasko', 18);
// Person {age: 18, name: "Janko", surname: "Hrasko",
//   originalName: "Janko Hrasko", fullName: ƒ}


/******************************************/
/*                Checks                  */
/******************************************/

/* Check if Object is tricky */
const obj = {};
const notObj = [1, 2];
console.log(typeof obj === 'object');
// true
console.log(typeof notObj === 'object');
// true??

function checkIfObj(obj) {
  return typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
}
checkIfObj(notObj);
// false

/* Check if object has property */
const obj = new Person('Janko', 'Hrasko', 18);
'name' in obj
// true
'address' in obj
// false

/* Check if Object is instance of class */
const obj = new Number(3);
obj instanceof Number
// true
obj instanceof String
// false

/* note that clone of instance is no longer instance */
const obj = new Person('Janko', 'Hrasko', 18);
obj instanceof Person
// true
const myObj = { ...obj };
myObj instanceof Person
// false

/******************************************/
/*             Some utils                 */
/******************************************/

/**
 * Pick - return object with extracted properties
 * (is also usefull example of reduce)
 */
function pick(obj, ...props) {
  return props.reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});
}

const obj = { a: 'a', b: 'b', c: 1 };
const myObj = pick(obj, 'a', 'c');
// {a: "a", c: 1}


/**
 * Simple runtime check if 'obj' fullfills interface
 * e.g. Checks only if all 'props' are present in 'obj'.
 *  
 * @param obj:any - object to check
 * @param props:string[] - list of properties to check
 * @returns boolean
 */
 function isInterface(obj, props) {
  let valid = true;
  valid = valid && !!obj && typeof obj === 'object';
  props.forEach((prop) => {
    valid = valid && prop in obj;
  });
  return valid;
}

const obj = { a: 'a', b: 'b', c: 1 };
isInterface(obj, ['a', 'b', 'c']);
// true