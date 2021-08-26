/******************************************/
/* window object scope (global namespace) */
/******************************************/
hi = 'hi';
var hello = 'hello';
console.log(hi);
console.log(window.hi);
console.log(hello);
console.log(window.hello);
/* 
- pollutes window namespace
- can rewrite vital properties and cousing trouble
*/
console.log(window.close)
// ƒ close() { [native code] }
close = 1;
console.log(window.close);
// 1

/* REMEDY: use block scoped declarations let, const */
let ahoj = 'ahoj';
console.log(ahoj);
// ahoj
console.log(window.ahoj)
// undefined

/******************************************/
/* block scope {}                         */
/******************************************/

if (true) {
  let foo = 'foo';
  console.log(foo);
}
console.log(foo);
// Uncaught ReferenceError: foo is not defined

/* i is visible only in for{} scope */
function demo(count) {
  let funVar = 0;
  for (let i = 0; i < count; i++) {
    funVar += i;
  }
  console.log(funVar);
  console.log(i);
}
demo(4);
// 6
// Uncaught ReferenceError: i is not defined;

/* Inner function is not visible outside outer scope */
function outer(x) {
  function inner(y) {
    return y + 5;
  }
  return x + inner(x);
}
outer(2);
// 9
inner(3);
// VM2582:1 Uncaught ReferenceError: inner is not defined

/******************************************/
/* binding to scope                       */
/******************************************/

// getName() method looses scope because of asynchronicity
function Moo(name) {
  this.name = name;
  this.getName = function() {
    window.setTimeout(function() {
      console.log(`${this.name} is cool`);
    }, 1000);
  };
}
let moo = new Moo('Johny');
moo.getName();
// is cool

// let's bind scope to async function
function Moo2(name) {
  this.name = name;
  this.getName = function() {
    window.setTimeout(function() {
      console.log(`${this.name} is cool`);
    }.bind(this), 1000);
  };
}
let moo2 = new Moo2('Billy');
moo2.getName();
// Billy is cool

// or use arrow function which does bind(this) automagically
function Moo3(name) {
  this.name = name;
  this.getName = function() {
    window.setTimeout(() => {
      console.log(`${this.name} is cool`);
    }, 1000);
  };
}
let moo3 = new Moo3('Suzie');
moo3.getName();
// Suzie is cool