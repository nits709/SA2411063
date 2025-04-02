
//add();


/*
Variables in javascripts and scope of the variables

1. var 
    Scope -> Functional and Global, block scope
    functional - mean variables declared inside the function scope would remain within it.
    Global - variables declared outside functions but inside class so scope would accross the class
    block scope -variable declared inside block(if, for, while, try,switch) access would remain inside block.

    redeclaration is allowed.


2. Let
    1. scope : Blocked scope  + global
    2. redeclaration is not allowed.

3. const (final) is immutable variable.
   1. scope: blocked scope + global
   2. redeclaration is not allowed.
   3. variables are immutables.

   */

//    //global
//    var fname = "nitin";
//    let id = 101;
//    const email = "testing@gmail.com";
   
//    console.log("-------------calling global variables----------------")

//    console.log("name is " + fname)
//    console.log("id is " + id)
//    console.log("email is " + email)


// function show(){
//         console.log("-------------calling global variables from local function----------------")

//    console.log("name is " + fname)
//    console.log("id is " + id)
//    console.log("email is " + email)
//     }

//     //call the function
//     show();


// function display(){

//     // local variable - been declared and intialized inside the function
//     console.log("*******************************************")
//     let uname = "Sachin";
//     var marks=90;
//     const pr=4.5;

//     console.log("Name is "+ uname);
//     console.log("marks is "+ marks);
//     console.log("pr is "+ pr);
// }

// //function calling in JS
// display();

// //ReferenceError: uname is not defined (local variable scope is limited within function only.)
//     // console.log("Name is "+ uname);
//     // console.log("marks is "+ marks);
//     // console.log("pr is "+ pr);


//     //block scope
//      if(true){
//         let Aname = "Selenium";
//         var Sversion= 4.28;

//         console.log("AutomationName is "+ Aname)
//         console.log("Sversion is "+ Sversion)
//      }
     
//      console.log("Outside the block")
//      console.log("AutomationName is "+ Aname);
//     console.log("Sversion is "+ Sversion);


//     var x;
//     console.log(x);


//     let y;
//     console.log(y);

//     //const z; // const declaration must be initialized.
// // problem in var declaration - as you redeclared you will get updated data (over ride)
//     var data = "testing";
//     var data = "programming";
//     data ="codeing"

//     console.log(data);

// //cannot redeclare block-scope variable 
 let testData="chrome";
 //let testData="firefox";
 testData = "testing";

console.log(testData);


// const value = "ISFinal";

// console.log("line no 106 " + value)
// //const value = "test";
// value="nitin";

// console.log("line no 108 " + value)


// console.log("-------Hoisting----------")

// console.log("line no. 115 "+ num1)  // error or i get 1985 or i get undefined.

// var num1 = "1985";

// console.log(num1);


// // console.log("Line no. 122 " + num2)
// // let num2= 9090;


// console.log("Line no. 128 " + num3)
// const num3= 9090;


// //function declaration type in js
// function add(){
// console.log("function addition is calling");

// }

// //function calling 
// add();

// // function expression. 1. anonymous function and arrow function



// sum();

// let sum = function(){

//     console.log("function sum is calling")
// }

// //calling function
// sum();














