let tag;

console.info("tag = document.querySelector('#box');");
tag = document.querySelector("#box");
console.log(tag);
/*
console.info("tag = document.querySelector('.menu');");
tag = document.querySelector('.menu');
console.log(tag);

console.info("tag = document.querySelector('nav');");
tag = document.querySelector('nav');
console.log(tag);

console.info("tags = document.querySelectorAll('li');");
tags = document.querySelectorAll('li');
console.log(tags);

console.info("tags = document.querySelectorAll('li.active');");
tags = document.querySelectorAll('li.active');
console.log(tags);

console.info("tag = document.getElementById('box');");
tag = document.getElementById('box');
console.log(tag);

console.info("tags = document.getElementsByClassName('menu');");
tags = document.getElementsByClassName('menu');
console.log(tags);

console.info("tags = document.getElementsByName('surname');");
tags = document.getElementsByName('surname');
console.log(tags);

console.info("tags = document.getElementsByTagName('li');");
tags = document.getElementsByTagName('li');
console.log(tags);
*/

// To point exact item
/*
document.getElementsByTagName('li')[1];
document.getElementsByTagName('li').item(1);

tags = document.getElementsByTagName('input');
tags.namedItem('surname');

document.getElementsByTagName('input').namedItem('surname');
*/
console.log("asfsdaf");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then(({ data }) => {});
