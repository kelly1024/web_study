/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

*/
/*

Everything in between is a comment.
*/

/*
alert('hello!');

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

multiply(5,5);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yixing.jpg') {
      myImage.setAttribute ('src','images/test2.jpg');
    } else {
      myImage.setAttribute ('src','images/yixing.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Memory of summer, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Memory of summer, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
