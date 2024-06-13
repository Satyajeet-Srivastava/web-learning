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

// learned about modulo use of barects in code


var dog_age=prompt("what is your dog age :- ");
// var human_age=prompt ("what is human age");
var human_age=(dog_age-2)*4+21;
console.log(human_age);

// increment and decrement in s

var a=10;
a++;
console.log(a);
a--;
console.log(a);

//fuction in js

// second type of funtion in js 

function lifeInWeeks(age) {
    
  /************Don't change the code above************/    
      
      //Write your code here
      var ages = 90-age;
      var days = 365*ages;
      var weeks = 52*ages;
      var months =12*ages;
      
      console.log("You have "+days+" days, "+ weeks+" weeks, and "+months+" months left." )
      
  /*************Don't change the code below**********/
  }
  var age = prompt("what is your age:- " );
  
  lifeInWeeks(age)

  //Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight,height){
  var bmi=weight/(height*height);
  return Math.round(bmi);
}



//  If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);

// bmi should equal 20 when it's rounded to the nearest whole number.

//begennier complete 
// intermediate js start 


