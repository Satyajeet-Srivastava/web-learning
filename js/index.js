// console.log("hello world"); 
// console.log("bhai success");
// console.log(5+3);
alert("Hello");
var message= "Hello there, ";
var name = prompt("what is your name");
/*give variable a meaningfull name 
basic rule for naming just like c\c++ and the camel casing rule for naming
string basic rule as c/c++ 

var text= prompt("you have total 10 character to use. \n write your message below");
var leftchar = 10 - text.length;
alert("Total word in your name : " + name.length );

alert("Total character used : "+ text.length + " \n Total character left : " + leftchar );
alert(text.slice(0,10));
how to change case of any string*/
var firstchar=name.slice(0,1);
var remain=name.slice(1,20);
remain=remain.toLowerCase();
firstchar=firstchar.toUpperCase();
alert(message + firstchar +remain );