/******************************************/
/*         shadowing and hoisting         */
/******************************************/

/* function can access outside and own variables */
console.log('%c---myFunction---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunction(){
  console.log('out: ' + a); //ekvivalentny zapis
  var b = 'hello';
  console.log(`in: ${b}`);  //ekvivalentny zapis
}
myFunction();
// out: hi
// in: hello
console.log(`out: ${a}`);
// out: hi

/* function can modify outside variables */
console.log('%c---myFunction1---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunction1(){
  console.log(`out: ${a}`);
  a = 'hello';
  console.log(`in: ${a}`);
}
myFunction1();
// out: hi
// in: hello
console.log(`out: ${a}`);
// hello

/* function can shadow outside variable */
console.log('%c---myFunction2---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunction2(){
  var a = 'hello';
  console.log(`in: ${a}`);
}
myFunction2();
// in: hello
console.log(`out: ${a}`);
// out: hi

/* but shadowing is dangerous if hoisting happens */
console.log('%c---myFunction3---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunction3(){
  console.log(`out: ${a}`);
  var a = 'hello';
  console.log(`in: ${a}`);
}
myFunction3();
// out: undefined
// in: hello
console.log(`out: ${a}`);
// out: hi

/*
JS rewrote our function that all later var definitions
are "hoisted" and declared at top
*/
console.log('%c---myFunction3H---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunction3H(){
  var a;
  console.log(`out: ${a}`);
  a = 'hello';
  console.log(`in: ${a}`);
}
myFunction3H();
// out: undefined
// in: hello
console.log(`out: ${a}`);
// out: hi

/* Maybe we can prevent it by let declaration ? */
console.log('%c---myFunction4---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunction4(){
  console.log(`out: ${a}`);
  let a = 'hello';
  console.log(`in: ${a}`);
}
myFunction4();
// 💥 BIG BADA BOOM
// Uncaught ReferenceError: Cannot access 'a' before initialization

/*
REMEDY: avoid shadowing and hoisting!
- don't shadow outside variables with same name
- don't modify outside variables
- use const/let and declare it BEFORE first use
*/
console.log('%c---myFunctionOk---', 'background: #ddd; color: #111');
var a = 'hi';
function myFunctionOk(){
  let aa;
  console.log(`out: ${a}`);
  aa = 'hello';
  console.log(`in: ${aa}`);
}
myFunctionOk();
// out: hi
// in: hello
console.log(`out: ${a}`);
// out: hi