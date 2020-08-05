/*

const say = smth => console.log(smth);
say('What's up y\'all')

const exec = (func, arg) => func(arg);

exec(say, 'What do?')
      |         |
      ^         ^
  function    string


//a step further, we can pass a fuction as an argument to another function
const exec = (func, arg) => 
  func(arg);

//anonymous function
exec( (smth) => {
  console.log(smth);
}, 'yoooo!');
*/

//delay execution with setTimeout
window.setTimeout((smth) => {
  console.log(smth);
}, 2000, 'yoooo!');