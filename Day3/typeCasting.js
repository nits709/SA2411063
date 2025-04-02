// /*

// conversion of one type of data into other type is called type casting.

// 1. Implicit Conversion (Automatically)
//     it called coersion typecast in JS

// 2. Explicit Conversion (Manually) 
//    String(), Number(), Boolean();   

// */

// //Type coersion: When JS automatically convert the types is called type coersion.
// //String conversion: Implicit.

// let num1="10"+20; //20 will coersion to string 20;
// console.log(num1);; 1020
// console.log(typeof num1);


// let num2 = 2+5+"10"; //7 will coerion with string "7" + "10" = 710
// console.log(num2)
// console.log(typeof num2)

// let num3 = 2+5+"10" + 5; //7105
// console.log(num3)
// console.log(typeof num3)

// console.log("-----Number Coersion--------");
// console.log("20"+"10"+20) // 201020

// console.log("20"-10);// 20 coresed to number 20-10= 10
// console.log(typeof ("20"-10));


// console.log("100"*2);// 100 coresed to number 100*2= 200
// console.log(typeof ("100"*2));

// console.log("20"/"2"); //10

// console.log("hi"*20); //Not a number Nan


// console.log("----------Explicit Conversion-----------");
// let data="200";

// console.log(typeof data);// string
// console.log("value of data "+ data);//200
// console.log(data+200);// 200200

// //addition - string to number

// let result= Number(data);
// console.log(typeof data);
// console.log("value of data "+ data);
// console.log(result+200);


// console.log(Number("Hello"));//Nan
// console.log(Number(true)); // 1
// console.log(Number(false)); //0
// console.log(Number(null)); //0
// console.log(Number(undefined));//Nan


// console.log("=======Number to String=========");
// let num= 200;
// console.log(typeof num);
// console.log("value of num "+ num);
// console.log(num-100);//100
// console.log(num+100); // 300

// let numToStringConvert=String(num);
// console.log(numToStringConvert); // "200"
// console.log(typeof numToStringConvert);

// console.log(numToStringConvert+100); // 200100

// //String to number
// console.log(numToStringConvert-50); //"200"-50 = 150;


//==============================================================================================
//Boolean -truthy
 //truthy means any value in boolean context represented as true | nonzero, number and nonempty string
 //falsy any value in boolean context represented as false - 0,"",null,undefined,Nan,false;

 console.log(Boolean(90)); //true
 console.log(Boolean(-90)); //true
 console.log(Boolean(" ")); //true
 console.log(Boolean("")); //false
 console.log(Boolean("Nitin")); //true
 console.log(Boolean(78.66)); // ture

 console.log(Boolean(0)); // false
 console.log(Boolean(false)); //false
 console.log(Boolean(null));//false
 console.log(Boolean(undefined)); //false


console.log(isNaN(1234));// false as 1234 is number



 












